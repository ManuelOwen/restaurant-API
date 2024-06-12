"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentService = exports.updateCommentService = exports.createCommentService = exports.getCommentService = exports.commentService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const commentService = async (limit) => {
    if (limit) {
        return await db_1.db.query.commentTable.findMany({ limit: limit });
    }
    return await db_1.db.query.commentTable.findMany();
};
exports.commentService = commentService;
const getCommentService = async (id) => {
    return await db_1.db.query.commentTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.commentTable.id, id)
    });
};
exports.getCommentService = getCommentService;
const createCommentService = async (user) => {
    await db_1.db.insert(schema_1.commentTable).values(user);
    return "User created successfully";
};
exports.createCommentService = createCommentService;
const updateCommentService = async (id, user) => {
    await db_1.db.update(schema_1.commentTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.commentTable.id, id));
    return "User updated successfully";
};
exports.updateCommentService = updateCommentService;
const deleteCommentService = async (id) => {
    await db_1.db.delete(schema_1.commentTable).where((0, drizzle_orm_1.eq)(schema_1.commentTable.id, id));
    return "User deleted successfully";
};
exports.deleteCommentService = deleteCommentService;
