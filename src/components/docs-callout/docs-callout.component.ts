import { Component, Input } from '@angular/core';
import packageJson from '../../../package.json';
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";

@Component({
  selector: 'app-docs-callout',
  templateUrl: './docs-callout.component.html',
  styleUrls: ['./docs-callout.component.scss']
})
export class DocsCalloutComponent {

  @Input() name: string = '';

  constructor() { }

  private _href: string = 'https://coreui.io/angular/docs/';

  get href(): string {
    return this._href;
  }

  @Input()
  set href(value: string) {
    // const version = packageJson?.config?.assign_it_version;
    const docsUrl = packageJson?.config?.assign_it_docs_url ?? 'https://coreui.io/angular/';
    // const path: string = version ? `${version}/${value}` : `${value}`;
    // const path: string = value;
    this._href = `${docsUrl}${value}`;
    console.log("que rayos es esto", this._href);
  }

  get plural() {
    return this.name?.slice(-1) === 's';
  }

}
