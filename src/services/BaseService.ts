import { HttpProvider } from "./HttpProvider";

export abstract class BaseService{
    http = new HttpProvider();
}