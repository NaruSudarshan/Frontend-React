// this service file is to handle authentication related tasks
// this just provides a wrapper around appwrite sdk
// so that we can easily swap out appwrite with any other backend service in future if needed
// without changing rest of the codebase


// if we change backend service, we just need to change this file

import conf from "../conf/conf";
import { Client ,Account,ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another function to login the user after successful account creation
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const userSession = await this.account.createEmailPasswordSession(email, password);
            return userSession;
        } catch (error) {
            throw error;
        }   
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSession('current');
            return true;
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;