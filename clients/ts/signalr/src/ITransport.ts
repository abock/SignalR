// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
export enum HttpTransportType {
    None = 0,
    WebSockets = 1,
    ServerSentEvents = 2,
    LongPolling = 4,
}

export enum TransferFormat {
    Text = 1,
    Binary,
}

export interface ITransport {
    connect(url: string, transferFormat: TransferFormat): Promise<void>;
    send(data: any): Promise<void>;
    stop(): Promise<void>;
    onreceive: (data: string | ArrayBuffer) => void;
    onclose: (error?: Error) => void;
}
