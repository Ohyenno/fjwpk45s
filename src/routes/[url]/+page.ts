import { next } from "../store";
import { get } from "svelte/store";

export async function load({fetch}:any) {

    let values: any = undefined;

    // count path id for random titles
    let count:number = get(next);
    count++;
    next.set(count)
    
    
    const response: any = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);

    if (await response && await response.status === 200){
        values = await response.json();
    }


    return{
        values
    }
}
