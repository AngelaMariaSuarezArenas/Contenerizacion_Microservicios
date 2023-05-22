const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },   
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    fechaIniciacion: {
        type: Date,
        default: new Date()
    },
    fechaEntrega: {
        type: Date,
        default: new Date()
    },
    valor: {
        type: String,
        default: [true, 'Valor requerido']
    },
    fechaCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
    },
    universidad:{
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
    },
    
})

module.exports = model('Proyecto', ProyectoSchema)
