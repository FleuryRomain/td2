// modules

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// components

import FormSSNComponent from "./components/formSSN/FormSSN.component";
import DetailSSNComponent from "./components/detailSSN/DetailSSN.component";
import HistoriqueSSNComponent from "./components/historiqueSSN/HistoriqueSSN.component"

// services

import { DepartmentService } from "./services/department-service";
import { MunicipalityService } from "./services/municipality-service";

/**
 * @export
 * @class AppModule
 */
@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        HttpModule 
    ],
    
    declarations: [ 
        FormSSNComponent,
        DetailSSNComponent,
        HistoriqueSSNComponent
    ],
    
    bootstrap:    [ FormSSNComponent ],

    providers: [
        DepartmentService,
        MunicipalityService
    ]
})

export class AppModule {}

