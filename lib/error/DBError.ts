export class DBError {
  msg: string;
  error: any;
  constructor(msg: string, error: any) {
    this.msg = msg;
    this.error = error;
  }
}
