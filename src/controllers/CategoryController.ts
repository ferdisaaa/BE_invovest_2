import { Request, Response } from "express";
import { Category } from "../types/category";

let categories: Category[] = [];




//1. menampilkan list category
export const getCategories = (req : Request, res : Response) => {
    res.json(categories);
}


//2. menyimpan data category
export const createCategory = (req : Request, res : Response) => {
    const { name } = req.body;

    //buat valiadsi sederhana untuk, jika name belum diisi
    if (!name) {
        res.status(500).json({ error: "Nama category harus diisi" });
    };

    const newCategory: Category = {
        id: Date.now(),
        name: name,
    };
    //jika sudah disusun,simpan ke array atau database
    categories.push(newCategory);
    res.status(200).json({message :"Data berhasil disimpan", category : newCategory});
}

//3. menampilkan data category berdasarkan id
export const getCategoryById = (req: Request, res: Response) => {
    const categoryId = Number(req.params.id as string);
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({ message: "Data category tidak ditemukan" });
    }
};

//4.mengubah data category berdasarkan id
export const updateCategory = (req : Request, res : Response) => {}


//5. menghapus data category berdasarkan id
export const deleteCategory = (req : Request, res : Response) => {}