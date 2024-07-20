import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';
import { TranslateHttpLoader, } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';


// AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//   return  new  TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
// }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// export const provideTranslation = () => ({
//   defaultLanguage: 'en',
//   loader: {
//     provide: TranslateLoader,
//     useFactory: HttpLoaderFactory,
//     deps: [HttpClient],
//   },
// });

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideHttpClient(),
//     importProvidersFrom([HttpClientModule, TranslateModule.forRoot(provideTranslation())]),
//   ],
// };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};