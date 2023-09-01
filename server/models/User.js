const express = require('express')

const profileSchema = new schemas(
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
        id: false,
    }
);