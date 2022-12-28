import { Info } from "./info";
import { Warning } from "./warning";

export interface Response<T> {
	messages?: Info[];
	warnings?: Warning[];
	errors?: Error[];
  errorsFlat: string;
  messagesFlat: string;
	success: boolean;
	content: T;
	statusCode: number;
}
