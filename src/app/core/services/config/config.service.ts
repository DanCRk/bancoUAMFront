import { Injectable } from '@angular/core';
import { AppProperties } from '../../interfaces/appProperties/app-properties';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private appProperties: AppProperties | undefined;
  private readonly configPath: string = '/assets/appProperties.json';

  constructor(private http: HttpClient) {}

  async loadConfiguration(): Promise<AppProperties> {
    try {
      const response = await this.http
        .get<AppProperties>(`${this.configPath}`)
        .toPromise();
      this.appProperties = response;
      return this.appProperties!;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  get config(): AppProperties | undefined {
    return this.appProperties;
  }
}