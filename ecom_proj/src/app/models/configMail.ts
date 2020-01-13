import { ManageJob } from "./managejob.model";

export class ConfigMail extends ManageJob {
    public Id: number;
    public EmailFormat: string
    public EmailTo: string
    public EmailCC: string
    public EmailBCC: string
    public Subject: string
    public Body: string
    public Enviornment: string

}