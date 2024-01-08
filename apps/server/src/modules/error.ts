import { AxiosError } from "axios";

export class MyError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  toString() {
    return JSON.stringify(
      {
        name: this.name,
        status: this.status,
        cause: this.cause,
        message: this.message,
        stack: this.stack,
      },
      null,
      2,
    );
  }
  toJson() {
    return this.toString();
  }
}

AxiosError.prototype.toString = function () {
  return JSON.stringify(
    {
      name: this.name,
      status: this.response?.status ?? this.status,
      cause: this.cause,
      message:
        this.response?.data?.error?.message ??
        this.response?.data?.message ??
        this.message,
      stack: this.stack,
    },
    null,
    2,
  );
};

Error.prototype.toString = function () {
  return JSON.stringify(
    {
      name: this.name,
      cause: this.cause,
      message: this.message,
      stack: this.stack,
    },
    null,
    2,
  );
};
