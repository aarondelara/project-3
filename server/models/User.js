const express = require('espress')

const profileSchema = new schema (
    {
        first: String,
        Last: String,
        age: Number,
        expenses: [
            {
            amount: Number,
            description: String,
            dataCreated: Date,
            dueDate: Date
            },
        ],
        toJSON: {
            virtuals: true,
        },
        id:false,
        }
);