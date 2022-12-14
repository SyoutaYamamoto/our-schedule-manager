import React, { useForm,Component } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from '@fullcalendar/list'; 
import { Calendar } from '@fullcalendar/core';
import { Inertia } from "@inertiajs/inertia";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/inertia-react'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from "date-fns/locale/ja";
import jaLocale from '@fullcalendar/core/locales/ja';
ja.options.weekStartsOn = 0;
registerLocale("ja", ja);

class Schedule extends Component {
  const  = (prompt) => {
    const {events} = prompt;
    const {data, setData, put} = useForm({
        title: events.title,
        started_at: events.started_at,
        ended_at: events.ended_at
    })
  }
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      formInview: false,
      inputStart: new Date(),
      inputEnd: new Date(),
      inputTitle: "",
      inputMemo: "",
      isInputTitle: false,
      isChange: false,
    };
    this.myEvents = [
      {
        id: 0,
        title: "event 1",
        start: "2022-12-22 10:00:00",
        end: "2022-12-22 11:00:00",
        memo: "memo1",
      },
      {
        id: 1,
        title: "event 2",
        start: "2022-12-23 10:00:00",
        end: "2022-12-23 11:00:00",
        memo: "memo2",
      },
    ];
    this.EVENT_SEL_NON = 0xffff;
    this.selEventID = this.EVENT_SEL_NON;
    this.onAddEvent = this.onAddEvent.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onDeleteEvent = this.onDeleteEvent.bind(this);
    console.log(props);
  }
  render() {
    // console.log(this.myEvents);
    return (
      <div>
        {this.renderCover()}
        {this.renderForm()}
        <div className="container">
          <FullCalendar
          locales={[jaLocale]}
          locale='ja'
          initialView="dayGridMonth"
            //defaultView="timeGridWeek" // ??????UI
            // contentHeight="auto"
            slotDuration="00:30:00" // ?????????????????????????????????
            // minTime="08:00:00"         // ??????????????????????????????
            // maxTime="23:00:00"         // ??????????????????????????????
            selectable={true} // ??????????????????
            // editable={true} // ???????????????????????????
            // eventOverlap={false}       // ??????????????????????????????
            allDaySlot={false} // allday???????????????
            //allDayText={"???????????????"} // allday???????????????????????????
            //selectMinDistance={15}                                          // ??????????????????????????????????????????????????????????????????????????????????????????????????????
            // aspectRatio={500.0}
            titleFormat={{
              year: "numeric",
              month: "short",
              day: "numeric",
            }} // ?????????????????????????????????
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek listWeek', // ??????
            }}
            businessHours={{
              daysOfWeek: [0,1, 2, 3, 4, 5,6],
              startTime: "5:00",
              endTime: "21:00",
            }}
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin,interactionPlugin]} // ??????
            ref={this.ref}
            weekends={true} // ????????????
            events={this.myEvents} // ????????????????????????????????????//???????????????
            eventClick={this.handleClick} // ???????????????????????????
            select={this.handleSelect} // ??????????????????????????????
            eventMouseEnter={this.handleMouseEnt}  // ???????????????????????????
            eventMouseLeave={this.handleMouseLev}  // ?????????????????????????????????
            eventDragStart={this.handleDragStart}  // ?????????????????????????????????
            eventDrop={this.handleDrop}            // ?????????????????????
            eventResize={this.handleResize}        // ????????????????????????????????????
            dateClick={this.handledateClick}       // ?????????????????????
            eventRender={this.handleRender}
            //selectable={true}
            selectMirror={true}
            droppable={true}
            editable={true}
          />
        </div>
      </div>
    );
  }
  //--------------
  // ?????????????????????
  //--------------
  //??????????????????????????????
  handleSelect = (selectInfo) => {
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
  
???//??????????????????????????????
  handleClick = (info) => {
    this.selEventID = info.event.id;
    const selEvent = this.myEvents[info.event.id];
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

  //--------------
  // ???????????????
  //--------------
  renderCover() {
    return (
      <div
        onClick={() => {
          this.setState({ formInview: false });
        }}
        className={
          this.state.formInview
            ? "container__cover inview"
            : "container__cover "
        }
      ></div>
    );
  }
  //--------------
  // ??????????????????
  //--------------
  renderForm() {
    return (
      <div
        className={
          this.state.formInview ? "container__form inview" : "container__form"
        }
      >
        <form>
          {this.state.isChange === false ? (
            <div className="container__form__header">???????????????</div>
          ) : (
            <div className="container__form__header">???????????????</div>
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
  renderTitle() {
    return (
      <React.Fragment>
        <p className="container__form__label">????????????</p>
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
  renderMemo() {
    return (
      <React.Fragment>
        <p className="container__form__label">??????</p>
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
  renderStartTime() {
    return (
      <React.Fragment>
        <p className="container__form__label">????????????</p>
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
  renderEndTime() {
    return (
      <React.Fragment>
        <p className="container__form__label">????????????</p>
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
  renderBtn() {
    return (
      <div>
        {this.state.isChange === false ? (
          <div>
            <input
              className="container__form__btn_cancel"
              type="button"
              value="???????????????"
              onClick={() => {
                this.setState({ formInview: false });
              }}
            />
            <input
              className="container__form__btn_save"
              type="button"
              value="??????"
              disabled={!this.state.isInputTitle}
              onClick={this.onAddEvent}
            />
          </div>
        ) : (
          <div>
            <input
              className="container__form__btn_delete"
              type="button"
              value="??????"
              onClick={this.onDeleteEvent}
            />
            <input
              className="container__form__btn_save"
              type="button"
              value="??????"
              onClick={this.onChangeEvent}
            />
          </div>
        )}
      </div>
    );
  }
  //--------------
  // ??????????????????
  //--------------
  getdoubleDigestNumer(number) {
    return ("0" + number).slice(-2);
  }
  changeDateToString(dt) {
    const year = dt.getFullYear();
    const month = this.getdoubleDigestNumer(dt.getMonth() + 1);
    const date = this.getdoubleDigestNumer(dt.getDate());
    const hour = this.getdoubleDigestNumer(dt.getHours());
    const minutes = this.getdoubleDigestNumer(dt.getMinutes());

    const retDate = `${year}-${month}-${date} ${hour}:${minutes}:00`;
    return retDate;
  }
  onAddEvent() {
    const starttime = this.changeDateToString(this.state.inputStart);
    const endtime = this.changeDateToString(this.state.inputEnd);

    if (starttime >= endtime) {
      alert("?????????????????????????????????????????????????????????");
      return;
    }
    const event = {
      title: this.state.inputTitle,
      memo: this.state.inputMemo,
      start: starttime,
      end: endtime,
    };
    if (this.addEvent(event) === true) {
      window.alert("??????????????????");
      this.setState({ formInview: false });
    }
  }
  onChangeEvent(values) {
    if (window.confirm("?????????????????????")) {
      const starttime = this.changeDateToString(this.state.inputStart);
      const endtime = this.changeDateToString(this.state.inputEnd);

      if (starttime >= endtime) {
        alert("?????????????????????????????????????????????????????????");
        return;
      }

      const event = {
        title: this.state.inputTitle,
        memo: this.state.inputMemo,
        start: starttime,
        end: endtime,
        id: this.selEventID,
      };
      if (this.changeEvent(event) === true) {
        window.alert("????????????????????????????????????");
        this.setState({ formInview: false });
      }
    } else {
      return;
    }
  }
  onDeleteEvent(values) {
    if (window.confirm("?????????????????????")) {
      if (this.selEventID < this.EVENT_SEL_NON) {
        let EventID = this.selEventID;
        let delevent = this.ref.current.getApi().getEventById(EventID);
        delevent.remove();
        this.selEventID = this.EVENT_SEL_NON;
        this.myEvents[EventID].isDel = true;
      }
      this.setState({ formInview: false });
      alert("????????????????????????????????????");
    } else {
      return;
    }
  }
  addEvent = (ev, col) => {
    ev.id = this.getID();
    this.myEvents.push(ev);
    this.ref.current.getApi().addEvent(ev);

    return true;
  };
  changeEvent = (ev, col = "red") => {
    this.myEvents[ev.id].title = ev.title;
    this.myEvents[ev.id].memo = ev.memo;
    this.myEvents[ev.id].start = ev.start;
    this.myEvents[ev.id].end = ev.end;

    this.ref.current.getApi().getEventById(ev.id).remove();
    this.ref.current.getApi().addEvent(this.myEvents[ev.id]);

    return true;
  };
  sortEventID = (a, b) => {
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  };
  getID = () => {
    this.myEvents.sort(this.sortEventID);
    let i;
    for (i = 0; i < this.myEvents.length; i++) {
      if (this.myEvents[i].id !== i) {
        break;
      }
    }
    return i;
  };
  handleDropEvent = (e) =>{
    const data ={
      title: e.event.title,
      start: formateDateTime(e.start),
      end: formateDateTime(e.end)
    };
    Inertia.put(route("events.update",e.event.id),data);
    //??????events??????????????????????????????
  }
}

export default Schedule;