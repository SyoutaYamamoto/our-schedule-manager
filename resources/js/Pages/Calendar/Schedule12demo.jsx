//global route*/
//import React, {useState} from "react";
//import React, { FC } from 'react';//②
import React, { Component,useState } from "react";
import FullCalendar from '@fullcalendar/react';//表示①
//import FullCalendar, { DateSelectArg } from '@fullcalendar/react';//②
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list'; 
//import interactionPlugin from '@fullcalendar/interaction';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import jaLocale from '@fullcalendar/core/locales/ja';
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'
import { Col, Row } from "reactstrap";


//import './App.css';
console.log("a");

/*function Clicled(){
    //クリックしたイベントのタイトルが取れるよ
    alert('Clicked on: ' + event.title);
  }
*/
const  formateDateTime = (
    _fmt = 'YYYY/MM/DD hh:mm:ss.iii',
    _dt  = new Date(),
) => [
        [ 'YYYY', _dt.getFullYear()  ],
        [ 'MM',   _dt.getMonth() + 1 ], // なぜ Java と同じ仕様にしたのか？小一時間問いたい
        [ 'DD',   _dt.getDate()      ],
        [ 'hh',   _dt.getHours()     ],
        [ 'mm',   _dt.getMinutes()   ],
        [ 'ss',   _dt.getSeconds()   ],
        [ 'iii',  _dt.getMilliseconds() ],
    ].reduce(
        (s,a) => s.replace( a[0], `${a[1]}`.padStart(a[0].length,'0') ),
        _fmt
    )

//既存イベントドラング&ドロップ時の前筆処理*/
const handleDropEvent = (e)=>{
  const data = {
    title: e.event.title,
    start: formateDateTime(e.event.stact),
    end: formateDateTime(e.event.end),
  };
  Inertia.put(route("events.update", e.event.id), data);
}

const evebtsdata = (e)=>{
  events: [
      { title: "Event 1", id: "1" },
      { title: "Event 2", id: "2" },
      { title: "Event 3", id: "3" },
      { title: "Event 4", id: "4" },
      { title: "Event 5", id: "5" }
    ]
}
class App extends Component {
  state = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "99999998"
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "99999999"
      }
    ],
    events: [
      { title: "Event 1", id: "1" },
      { title: "Event 2", id: "2" },
      { title: "Event 3", id: "3" },
      { title: "Event 4", id: "4" },
      { title: "Event 5", id: "5" }
    ]
  };

  /**
   * adding dragable properties to external events through javascript
   */
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id
        };
      }
    });
  }

  /**
   * when we click on event we are displaying event details
   */
  eventClick = eventClick => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };
}
function Schedule() {
  /*const handleDateSelect = (selectionInfo)=> {
    console.log('selectionInfo: ', selectionInfo); // 選択した範囲の情報をconsoleに出力
    const calendarApi = selectionInfo.view.calendar;

    calendarApi.unselect(); // 選択した部分の選択を解除
  };*/
  
  return (
    <>
    <p>schedule</p>
    <div>
      <Row>
        

        <Col lg={9} sm={9} md={9}>
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
          //select={handleDateSelect}
          selectable={true}
          selectMirror={true}
          droppable={true}
          editable={true}
        />
        </Col>
        <Link href="/home">ホームへ</Link>
      </Row>        
      

    </div>
    </>
  );
}

export default Schedule;