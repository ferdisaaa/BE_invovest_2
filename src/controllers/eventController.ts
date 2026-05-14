import { Request, Response } from 'express';
import { Event } from '../types/event';

let events: Event[] = [];


//1. menampilkan data event
export const getEvents = (req : Request, res : Response) => {
    res.json(events);
};

//2. menyimpan data event
export const createEvent = (req : Request, res : Response) => {
    const { id, name, date, location, description } = req.body;
    if ( !id ||!name || !date || !location || !description) {
        res.status(500).json({ error: "Semua field harus diisi" });
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
export const getEventById = (req: Request, res: Response) => {
    const eventId = Number(req.params.id as string);
    const event = events.find((e) => e.id === eventId);
    if (event) {
        res.status(200).json(event);
    } else {
        res.status(404).json({ message: "Data event tidak ditemukan" });
    }
};
//4. mengubah event berdasarkan id
export const updateEvent = (req: Request<{ id: string }>, res: Response) => {
    const eventId = Number(req.params.id);
    const { name, date, location, description } = req.body;
    if (!name || !date || !location || !description) {
        res.status(400).json({ error: "Semua field harus diisi" });
    }
    const index = events.findIndex((e) => e.id === eventId);
    if (index !== -1 && events[index]) {
        events[index].name = name;
        events[index].date = date;
        events[index].location = location;
        events[index].description = description;
        res.status(200).json({ 
            message: "Data event berhasil diubah", 
            event: events[index] 
        });
    } else {
        res.status(404).json({ message: "Data event tidak ditemukan" });
    }
};
//5. menghapus event berdasarkan id
export const deleteEvent = (req: Request, res: Response) => {
    const eventId = Number(req.params.id);
    const index = events.findIndex((e) => e.id === eventId);
    if (index !== -1) {
        events.splice(index, 1);
        res.status(200).json({
            message: "Data event berhasil dihapus"
        });
    } else {
        res.status(404).json({ 
            message: "Data event tidak ditemukan" 
        });
    }
};