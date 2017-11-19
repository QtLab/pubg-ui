import * as ActionType from './action-types';
import { AuthResponse, Service, Command, ConnectionAcceptedResponse } from './types';

export interface AppInitialize {
  type: ActionType.APP_INITIALIZE;
}

export const appInitialize = (): AppInitialize => ({
  type: ActionType.APP_INITIALIZE
});

export interface EngineReady {
  type: ActionType.ENGINE_READY;
}

export const engineReady = (): EngineReady => ({
  type: ActionType.ENGINE_READY
});

// AUTHENTICATION
export interface AuthRequest {
  type: ActionType.AUTH_REQUEST;
}

export const authRequest = (): AuthRequest => ({
  type: ActionType.AUTH_REQUEST
});

export interface AuthSuccess {
  type: ActionType.AUTH_SUCCESS;
  payload: AuthResponse;
}

export const authSuccess = (response: AuthResponse): AuthSuccess => ({
  type: ActionType.AUTH_SUCCESS,
  payload: response
});

export interface AuthFailure {
  type: ActionType.AUTH_FAILURE;
  payload: { error: string };
}

export const authFailure = (error: Error): AuthFailure => ({
  type: ActionType.AUTH_FAILURE,
  payload: { error: error.message }
});

// COUNTRY CODE
export interface CountryCodeRequest {
  type: ActionType.COUNTRY_CODE_REQUEST;
}

export const countryCodeRequest = (): CountryCodeRequest => ({
  type: ActionType.COUNTRY_CODE_REQUEST
});

export interface CountryCodeSuccess {
  type: ActionType.COUNTRY_CODE_SUCCESS;
  payload: { countryCode: string };
}

export const countryCodeSuccess = (countryCode: string): CountryCodeSuccess => ({
  type: ActionType.COUNTRY_CODE_SUCCESS,
  payload: { countryCode }
});

// VERSIONING
export interface VersionRequest {
  type: ActionType.VERSION_REQUEST;
}

export const versionRequest = (): VersionRequest => ({
  type: ActionType.VERSION_REQUEST
});

export interface VersionSuccess {
  type: ActionType.VERSION_SUCCESS;
  payload: { version: string };
}

export const versionSuccess = (version: string): VersionSuccess => ({
  type: ActionType.VERSION_SUCCESS,
  payload: { version }
});

// WEBSOCKETS
export interface WebSocketInit {
  type: ActionType.WEBSOCKET_INIT;
}

export const webSocketInit = (): WebSocketInit => ({
  type: ActionType.WEBSOCKET_INIT
});

export interface WebSocketReady {
  type: ActionType.WEBSOCKET_READY;
}

export const webSocketReady = (): WebSocketReady => ({
  type: ActionType.WEBSOCKET_READY
});

export interface WebSocketError {
  type: ActionType.WEBSOCKET_ERROR;
  payload: { error: any };
}

export const webSocketError = (error: any): WebSocketError => ({
  type: ActionType.WEBSOCKET_ERROR,
  payload: { error }
});

export interface WebSocketClosed {
  type: ActionType.WEBSOCKET_CLOSED;
  payload: { reason: string };
}

export const webSocketClosed = (reason: string): WebSocketClosed => ({
  type: ActionType.WEBSOCKET_CLOSED,
  payload: { reason }
});

export interface WebSocketRequest {
  type: ActionType.WEBSOCKET_REQUEST;
  payload: any[];
}

export interface ConnectionAccepted {
  type: ActionType.WEBSOCKET_CONNECTED;
  payload: ConnectionAcceptedResponse;
}

export const webSocketConnected = (response: ConnectionAcceptedResponse): ConnectionAccepted => ({
  type: ActionType.WEBSOCKET_CONNECTED,
  payload: response
});

let counter = 10000;

export const webSocketRequest = (service: Service, command: Command, ...payload: any[]): WebSocketRequest => ({
  type: ActionType.WEBSOCKET_REQUEST,
  payload: [counter++, null, service, command, ...payload]
});

export interface WebSocketResponse {
  type: ActionType.WEBSOCKET_RESPONSE;
  payload: any[];
}

export const webSocketResponse = (payload: any[]): WebSocketResponse => ({
  type: ActionType.WEBSOCKET_RESPONSE,
  payload
});

export type AppActions =
  | AppInitialize
  | EngineReady
  | AuthRequest
  | AuthSuccess
  | AuthFailure
  | CountryCodeRequest
  | CountryCodeSuccess
  | VersionRequest
  | VersionSuccess
  | WebSocketInit
  | WebSocketReady
  | WebSocketError
  | WebSocketClosed
  | WebSocketRequest
  | WebSocketResponse
  | ConnectionAccepted
;
