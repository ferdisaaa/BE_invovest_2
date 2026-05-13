import { Request, Response } from 'express';
import { Event } from '../types/event';

let events: Event[] = [];


//1. menampilkan data event
export const getEvents = (req : Request, res : Response) => {
    res.json(events);
};

//2. menyimpan data event
export const createEvent = (req : Request, res : Response) => {
    const { name, date, location, description } = req.body;
    if (!name || !date || !location ) {
        res.status(500).json({ error: "Nama event harus diisi" });
    };
    const newEvent: Event = {
        id: Date.now(),
        name : name,
        date : date,
        location : location,
        description : description,
    };
    events.push(newEvent);
    res.status(200).json({message :"Data berhasil disimpan", event : newEvent});
};

//3. menampilkan data event berdasarkan id
export const getEventById = (req : Request, res : Response) => {};
//4. mengubah event berdasarkan id
export const updateEvent = (req : Request, res : Response) => {};
//5. menghapus event berdasarkan id
export const deleteEvent = (req : Request, res : Response) => {};