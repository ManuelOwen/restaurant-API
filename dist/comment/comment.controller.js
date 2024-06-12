"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.createComment = exports.getComment = exports.getComments = exports.listComments = void 0;
const comment_service_1 = require("./comment.service");
const listComments = async (c) => {
    exports.listComments;
    try {
        //limit the number of comments to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, comment_service_1.commentService)(limit);
        if (data == null || data.length == 0) {
            return c.text("comment not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listComments = listComments;
const getComments = async (c) => {
    try {
        const data = await (0, comment_service_1.commentService)();
        return c.json(data);
    }
    catch (error) {
        return c.json({ message: error.message }, 500);
    }
};
exports.getComments = getComments;
//get comment by id
const getComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const comment = await (0, comment_service_1.getCommentService)(id);
    if (comment == undefined) {
        return c.text("comment not found", 404);
    }
    return c.json(comment, 200);
};
exports.getComment = getComment;
//create comment
const createComment = async (c) => {
    try {
        const comment = await c.req.json();
        const createdcomment = await (0, comment_service_1.createCommentService)(comment);
        if (!createdcomment)
            return c.text("comment not created", 404);
        return c.json({ msg: createdcomment }, 201);
        console.log("msg");
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createComment = createComment;
//update comment
const updateComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const comment = await c.req.json();
    try {
        // search for the comment
        const searchedcomment = await (0, comment_service_1.getCommentService)(id);
        if (searchedcomment == undefined)
            return c.text("comment not found", 404);
        // get the data and update it
        const res = await (0, comment_service_1.updateCommentService)(id, comment);
        // return a success message
        if (!res)
            return c.text("comment not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateComment = updateComment;
//delete comment
const deleteComment = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the comment
        const comment = await (0, comment_service_1.getCommentService)(id);
        if (comment == undefined)
            return c.text("comment not found", 404);
        //deleting the comment
        const res = await (0, comment_service_1.deleteCommentService)(id);
        if (!res)
            return c.text("comment not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteComment = deleteComment;
