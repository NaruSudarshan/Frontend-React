import conf from "../conf/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    account;
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImageId, status, userId }) {
        try {
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImageId,
                    status,
                    userId
                }
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImageId, status }) {
        try {
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImageId,
                    status
                }
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async deletePost({ slug }) {
        try {
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getPost({ slug }) {
        try {
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            const posts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            return posts;
        } catch (error) {
            throw error;
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.log("Appwrite : upload file ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite : delete file ", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        try {
            const file = await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            return file;
        } catch (error) {
            console.log("Appwrite : get file preview ", error);
            return false;
        }
    }
}

const service = new Service();
export default service;