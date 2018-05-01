// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

import { LongPollingTransport } from "../src/LongPollingTransport";
import { NullLogger } from "../src/Loggers";
import { TestHttpClient } from "./TestHttpClient";
import { TransferFormat } from "../src/ITransport";

describe("LongPollingTransport", () => {
    it("sends negotiation message", async () => {
        const httpClient = new TestHttpClient()
            .on("POST", (r) => {
                return Promise.reject("error");
            });
    
        const transport = new LongPollingTransport(httpClient, null, NullLogger.instance, false);

        await transport.connect("http://tempuri.org", TransferFormat.Binary);

        const stopPromise = transport.stop();

        await stopPromise;
    });
});