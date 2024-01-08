import winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "debug",
  format: winston.format.combine(
    winston.format.json(),
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`,
    ),
  ),
  transports: [new winston.transports.Console()],
});
