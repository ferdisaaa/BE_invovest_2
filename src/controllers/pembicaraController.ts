import { Request, Response } from 'express';
import { Pembicara } from '../types/pembicara';

let pembicara: Pembicara[] = [];


//1. menampilkan data pembicara
export const getPembicara = (req : Request, res : Response) => {
    res.json(pembicara);
};

//2. menyimpan data pembicara
export const createPembicara = (req : Request, res : Response) => {
    const { id, name, role, foto } = req.body;

    //buat valiadsi sederhana untuk, jika name belum diisi
    if (!id || !name || !role || !foto ) {
        res.status(500).json({ error: "Semua field harus diisi" });
    };
    
    
    //jika validasi berhasil
    const newPembicara: Pembicara = {
        id: id,
        name: name,
        role: role,
        foto: foto,
    };
    
    //jika sudah disusun,simpan ke array atau database
    pembicara.push(newPembicara);
    
    //jika sudah berhasil disimpan, kembalikan response sukses
    res.status(200).json({message :"Data berhasil disimpan", pembicara : newPembicara});
};

//3. menampilkan data pembicara berdasarkan id
export const getPembicaraById = (req : Request, res : Response) => {};
//4. mengubah pembicara berdasarkan id
export const updatePembicara = (req : Request, res : Response) => {};
//5. menghapus pembicara berdasarkan id
export const deletePembicara = (req : Request, res : Response) => {};