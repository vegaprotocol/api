// package: oracles.v1
// file: oracles/v1/data.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class OracleData extends jspb.Message {
    clearPubKeysList(): void;
    getPubKeysList(): Array<string>;
    setPubKeysList(value: Array<string>): OracleData;
    addPubKeys(value: string, index?: number): string;
    clearDataList(): void;
    getDataList(): Array<Property>;
    setDataList(value: Array<Property>): OracleData;
    addData(value?: Property, index?: number): Property;
    clearMatchedSpecIdsList(): void;
    getMatchedSpecIdsList(): Array<string>;
    setMatchedSpecIdsList(value: Array<string>): OracleData;
    addMatchedSpecIds(value: string, index?: number): string;
    getBroadcastAt(): number;
    setBroadcastAt(value: number): OracleData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OracleData.AsObject;
    static toObject(includeInstance: boolean, msg: OracleData): OracleData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OracleData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OracleData;
    static deserializeBinaryFromReader(message: OracleData, reader: jspb.BinaryReader): OracleData;
}

export namespace OracleData {
    export type AsObject = {
        pubKeysList: Array<string>,
        dataList: Array<Property.AsObject>,
        matchedSpecIdsList: Array<string>,
        broadcastAt: number,
    }
}

export class Property extends jspb.Message {
    getName(): string;
    setName(value: string): Property;
    getValue(): string;
    setValue(value: string): Property;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
    export type AsObject = {
        name: string,
        value: string,
    }
}
