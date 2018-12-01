﻿import { SampleService } from '../Http/SampleService';
import { SampleResponse } from '../Models/SampleModels';


export class HomePage {

    public Init(hostElementId: string, buttonId: string) { 

        const hostElement = document.getElementById(hostElementId); 
        const button = document.getElementById(buttonId);

        button.addEventListener('click', (e: Event) => {
            const httpService = new SampleService();  
                
            httpService.Post<SampleResponse>('/Home/GetMessage', {})
                .then((model) => {
                    hostElement.innerText = model.title;
                });
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var page = new HomePage();
    page.Init('outputLabel', 'runButton');
}, false);



