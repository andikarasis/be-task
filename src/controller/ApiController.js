const { response } = require('../helpers/Common')
const Model = require('../model/')

const insert = async function (req, res) {
    const data = new Model({
        judul: req.body.judul,
        deskripsi: req.body.deskripsi
    })
    try {
        const dataToSave = await data.save();
        return response(res, 200, 'success inserting data', dataToSave)
    } catch (err) {
        console.log('Error while insert data', err)
        return response(res, 500, 'Error while insert data', {}, null)
    }
}

const get = async function (req, res) {
    try {
        const data = await Model.find();
        return response(res, 200, 'success get data', data)
    } catch (err) {
        console.log('Error while get data', err)
        return response(res, 500, 'Error while get user', {}, null)
    }
}

const getById = async function (req, res) {
    try {
        let id = req.params.id
        const data = await Model.findById(id);
        return response(res, 200, 'success get data by id', data)
    } catch (err) {
        console.log('Error while get data by id', err)
        return response(res, 500, 'Error while get user', {}, null)
    }
}

const updateById = async function (req, res) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {
            new: true
        };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        return response(res, 200, 'success update data by id', result)
    } catch (err) {
        console.log('Error while update data', err)
        return response(res, 500, 'Error while get user', {}, null)
    }
}

const deleteById = async function (req, res) {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        return response(res, 200, 'success delete data', data)
    } catch (err) {
        console.log('Error while delete data', err)
        return response(res, 500, 'Error while get user', {}, null)
    }
}

module.exports = {
    get,
    insert,
    getById,
    updateById,
    deleteById
}