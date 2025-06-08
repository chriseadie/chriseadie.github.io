import { Newable } from "../types/global.types";
import singleton from "./singleton";

export function useInject<T>(service:Newable<T>):T{
    if(singleton.hasService(service.name)){
        return singleton.getService(service.name)
    }
    var serviceInstance = new service();
    singleton.addService(service.name,serviceInstance)
    return serviceInstance;
}