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
console.log("a");
function Schedule() {
  const handleDateSelect = (selectionInfo)=> {
    console.log('selectionInfo: ', selectionInfo); // 選択した範囲の情報をconsoleに出力
    const calendarApi = selectionInfo.view.calendar;

    calendarApi.unselect(); // 選択した部分の選択を解除
  };

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
          {title:'eventを', start: '2022-11-14'},
          {title:'こんな感じで追加できます', start: '2022-11-15', end: '2022-11-17'}
        ]}*/
        events={'https://fullcalendar.io/api/demo-feeds/events.json'}
        select={handleDateSelect}
        selectable={true}
        selectMirror={true}
      />
      <Link href="/home">ホームへ</Link>
    </div>
    </>
  );
}

export default Schedule;

/*
function Scedule() {
  const handleDateSelect = (selectionInfo DateSelectArg)=> {
    console.log('selectionInfo: ', selectionInfo); // 選択した範囲の情報をconsoleに出力
    const calendarApi = selectionInfo.view.calendar;

    //calendarApi.unselect(); // 選択した部分の選択を解除
  };

  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // pluginsにlistGridPluginを設定する
          initialView="dayGridMonth" // 初期表示のモードを設定する
          headerToolbar={{
            right: 'dayGridMonth,timeGridWeek',
          }}
          events={'https://fullcalendar.io/api/demo-feeds/events.json'}
          select={handleDateSelect}
          selectable={true}
          selectMirror={true}
        />
      </div>
    </div>
  );
};
export default Scedule;*/