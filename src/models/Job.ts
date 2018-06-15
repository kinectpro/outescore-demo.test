export interface JobInterface {
  name: string;
  provider: string;
  modified_at: Date;

  // "staff": [
  //   {
  //     "image": null,
  //     "name": "Jon Dir"
  //   }
  //   ],
}

export class Job implements JobInterface {
  name: string;
  provider: string;
  modified_at: Date;

  constructor(data: JobInterface) {
    this.name = data.name;
    this.provider = data.provider;
    this.modified_at = new Date(data.modified_at);
  }
}
