import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContractAssetchain } from '../models/contract-assetchain';

@Injectable({
  providedIn: 'root'
})
export class SOWContractService {

  contracts: Observable<Object>;
  baseUrl: string = 'http://localhost:8000'; // Should make ENV variable 

  constructor(private httpClient: HttpClient) { }
  
  getContracts() {
    return this.httpClient.get<ContractAssetchain[]>(this.baseUrl + '/get_all_sows');
  }
}
