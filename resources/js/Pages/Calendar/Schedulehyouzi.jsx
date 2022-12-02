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
  /*class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.ref = React.createRef();
    }
  }*/
  
  var Events = [
    {
      id: 1,
      title: "event 1",
      start: "2022-12-22 10:00:00",
      end: "2022-12-22 11:00:00",
      memo: "memo1",
    },
    {
      id: 2,
      title: "event 2",
      start: "2022-12-23 10:00:00",
      end: "2020-12-23 11:00:00",
      memo: "memo2",
    },
  ];
   const renderForm=()=> {
    return (
      <div
        className={
          this.state.formInview ? "container__form inview" : "container__form"
        }
      >
        <form>
          {this.state.isChange  ? (
            <div className="container__form__header">予定を変更</div>
          ) : (
            <div className="container__form__header">予定を入力</div>
          )}
          <div>{this.renderTitle()}</div>
          <div>{this.renderStartTime()}</div>
          <div>{this.renderEndTime()}</div>
          <div>{this.renderMemo()}</div>
          <div>{this.renderBtn()}</div>
        </form>
      </div>
    );
  }
  const renderTitle=()=> {
    return (
      <React.Fragment>
        <p className="container__form__label">タイトル</p>
        <input
          className="container__form__title"
          type="text"
          value={this.state.inputTitle}
          onChange={(e) => {
            this.setState({ inputTitle: e.target.value });

            if (e.target.value === "") {
              this.setState({ isInputTitle: false });
            } else {
              this.setState({ isInputTitle: true });
            }
          }}
        />
      </React.Fragment>
    );
  }
  const renderMemo=()=> {
    return (
      <React.Fragment>
        <p className="container__form__label">メモ</p>
        <textarea
          className="container__form__memo"
          rows="3"
          value={this.state.inputMemo}
          onChange={(e) => {
            this.setState({ inputMemo: e.target.value });
          }}
        />
      </React.Fragment>
    );
  }
  const renderStartTime=()=> {
    return (
      <React.Fragment>
        <p className="container__form__label">開始日時</p>
        <DatePicker
          className="container__form__datetime"
          locale="ja"
          dateFormat="yyyy/MM/d HH:mm"
          selected={this.state.inputStart}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={10}
          todayButton="today"
          onChange={(time) => {
            this.setState({ inputStart: time });
          }}
        />
      </React.Fragment>
    );
  }
  const renderEndTime=()=> {
    return (
      <React.Fragment>
        <p className="container__form__label">終了日時</p>
        <DatePicker
          className="container__form__datetime"
          locale="ja"
          dateFormat="yyyy/MM/d HH:mm"
          selected={this.state.inputEnd}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={10}
          todayButton="today"
          onChange={(time) => {
            this.setState({ inputEnd: time });
          }}
        />
      </React.Fragment>
    );
  }
  const renderBtn=()=> {
    return (
      <div>
        {!this.state.isChange ? (
          <div>
            <input
              className="container__form__btn_cancel"
              type="button"
              value="キャンセル"
              onClick={() => {
                this.setState({ formInview: false });
              }}
            />
            <input
              className="container__form__btn_save"
              type="button"
              value="保存"
              disabled={!this.state.isInputTitle}
              onClick={this.onAddEvent}
            />
          </div>
        ) : (
          <div>
            <input
              className="container__form__btn_delete"
              type="button"
              value="削除"
              onClick={this.onDeleteEvent}
            />
            <input
              className="container__form__btn_save"
              type="button"
              value="変更"
              onClick={this.onChangeEvent}
            />
          </div>
        )}
      </div>
    );
  }
  
  const handleSelect = (selectInfo) => {
    let start = new Date(selectInfo.start);
    let end = new Date(selectInfo.end);
    start.setHours(start.getHours());
    end.setHours(end.getHours());

    this.setState({ inputTitle: "" });
    this.setState({ inputMemo: "" });
    this.setState({ isInputTitle: false });
    this.setState({ inputStart: start });
    this.setState({ inputEnd: end });
    this.setState({ isChange: false });
    this.setState({ formInview: true });
  };
  
  console.log(handleSelect);
  
  const handleClick = (info) => {
    this.selEventID = info.event.id;
    const selEvent = this.Events[info.event.id];
    const title = selEvent.title;
    const memo = selEvent.memo;
    const start = new Date(selEvent.start);
    const end = new Date(selEvent.end);

    this.setState({ inputTitle: title });
    this.setState({ inputMemo: memo });
    this.setState({ isInputTitle: true });
    this.setState({ inputStart: start });
    this.setState({ inputEnd: end });
    this.setState({ isChange: true });
    this.setState({ formInview: true });
  };
  console.log(handleClick);
  console.log(Events);
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
        //events={'https://fullcalendar.io/api/demo-feeds/events.json'}
        //select={handleDateSelect}
        selectable={true} // 日付選択可能
        selectMirror={true}
        slotDuration="00:30:00" // 表示する時間軸の最小値
        businessHours={{
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6],
          startTime: "5:00",
          endTime: "21:00",
        }}
        //ref={this.ref}
        weekends={true} // 週末表示
        events={Events} // 起動時に登録するイベント
        select={handleSelect} // カレンダー範囲選択時
        eventClick={handleClick} // イベントクリック時
      />
      <Link href="/home">ホームへ</Link>
    </div>
    </>
  );
}

export default Schedule;
  