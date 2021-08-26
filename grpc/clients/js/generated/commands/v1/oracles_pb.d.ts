// package: vega.commands.v1
// file: commands/v1/oracles.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OracleDataSubmission extends jspb.Message {
    getSource(): OracleDataSubmission.OracleSource;
    setSource(value: OracleDataSubmission.OracleSource): OracleDataSubmission;
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): OracleDataSubmission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleDataSubmission.AsObject;
    static toObject(includeInstance: boolean, msg: OracleDataSubmission): OracleDataSubmission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleDataSubmission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleDataSubmission;
    static deserializeBinaryFromReader(message: OracleDataSubmission, reader: jspb.BinaryReader): OracleDataSubmission;
}

export namespace OracleDataSubmission {
    export type AsObject = {
        source: OracleDataSubmission.OracleSource,
        payload: Uint8Array | string,
    }

    export enum OracleSource {
    ORACLE_SOURCE_UNSPECIFIED = 0,
    ORACLE_SOURCE_OPEN_ORACLE = 1,
    }

}
