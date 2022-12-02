<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;

class CalendarController extends Controller
{
    //
    public function schedule()
    {
        return inertia("Calendar/Schedule",["events" =>  Event::where("user_id",auth()->id())->get()]);
    }
    public function store(Request $request, Event $event)
    {
        //dd($request->all());
        $event->fill($request->all())->save();
        //return inertia("Calendar/Schedule");
        return redirect(route("events.index"));
    }
    public function update(Request $request, Event $event)
    {
        //dd($request->all());
        
        $input = $request->all();
        $event->fill($input)->save();
        //$event->fill($request->all())->save();
        //return inertia("Calendar/Schedule");
        return redirect(route("events.index"));
    }
    public function delete(Event $event)
    {
        
        //$id = Event::where('id',$request);
        $event->delete();
        //return inertia("Calendar/Schedule");
        return redirect(route("events.index"));
    }
}
