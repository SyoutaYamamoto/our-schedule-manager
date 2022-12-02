//import React, {useState} from "react";
import React, { FC } from 'react';//②
import FullCalendar from '@fullcalendar/react';//表示①
//import FullCalendar, { DateSelectArg } from '@fullcalendar/react';//②
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; 
import interactionPlugin from '@fullcalendar/interaction';
import jaLocale from '@fullcalendar/core/locales/ja';
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'


//import './App.css';
//console.log("test");

function Schedule(props) {
  //console.log(props.events);
  const {auth,events}=props;

  console.log(events);
  const formateDateTime = (date) => {
    //console.log(typeof date);
        return (
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate() +
            " " +
            date.toLocaleTimeString()
        );
    };
  
  //日付選択の処理
  const handleDateSelect = (e)=> {
   const calendarApi = e.view.calendar;
   
   //タイトル入力用のポップアップを表示
   const title = prompt("タイトルを入力してください")
   
   //タイトルが入力された際の送信処理
   if(title){
     const data = {
       title: title,
       user_id: auth.user.id,
       start: formateDateTime(e.start),
       end: formateDateTime(e.end),
     };
     //console.log(data)
     Inertia.post("/schedule",data);
   }

    calendarApi.unselect(); // 選択した部分の選択を解除
    //更新eventsテーブルから読み込み
  };
  
  // 既存イベントドラッグ&ドラッグ次の編集処理
  /*const handleDropEvent = (e) =>{
    console.log("test");
    const data ={
      title: e.event.title,
      user_id: auth.user.id,
      start: formateDateTime(e.start),
      end: formateDateTime(e.end)
    };
    console.log(data.start);
    Inertia.put("/schedule",e.event.id,data);
    //更新eventsテーブルから読み込み
  }*/
  const handleDropEvent = (e) =>{
    console.log(e.event.start);
    console.log(e.event.end);
    const data ={
      title: e.event.title,
      user_id: auth.user.id,
      start: formateDateTime(e.event.start),
      end: formateDateTime(e.event.end)
    };
    //seeder
    console.log("test");
    Inertia.put(`/schedule/${e.event.id}`,data);
  }
  //既存イベントクリック時削除ダイアログ
  const handleClick = (e) =>{
    console.log("削除");
    console.log(e.event.id);
    if (window.confirm("削除しますか？")) {
      alert("イベントを削除しました。");
      Inertia.delete(`/schedule/${e.event.id}`);
    } 
  }
    /*const handleClick = (id) => {
        Inertia.delete(`/schedule/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        })
    }*/
 
  

  return (
    <>
    <p>schedule</p>
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin]} // 追加
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek listWeek', // 追加
        }}
        /*events={[
          {title:'eventを', start: '2022-12-14'},
          {title:'こんな感じで追加できます', start: '2022-12-15', end: '2022-12-17'}
        ]}*/
        events={events}
        select={handleDateSelect}
        selectable={true}
        selectMirror={true}
        droppable={true}
        editable={true}
        eventDrop={handleDropEvent} 
        eventClick={handleClick}
      />
      <Link href="/home">ホームへ</Link>
    </div>
    </>
  );
}

export default Schedule;
