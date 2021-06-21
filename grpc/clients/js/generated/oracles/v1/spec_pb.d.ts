// package: oracles.v1
// file: oracles/v1/spec.proto

import * as jspb from "google-protobuf";

export class OracleSpecConfiguration extends jspb.Message {
  clearPubKeysList(): void;
  getPubKeysList(): Array<string>;
  setPubKeysList(value: Array<string>): void;
  addPubKeys(value: string, index?: number): string;

  clearFiltersList(): void;
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  addFilters(value?: Filter, index?: number): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpecConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpecConfiguration): OracleSpecConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSpecConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpecConfiguration;
  static deserializeBinaryFromReader(message: OracleSpecConfiguration, reader: jspb.BinaryReader): OracleSpecConfiguration;
}

export namespace OracleSpecConfiguration {
  export type AsObject = {
    pubKeysList: Array<string>,
    filtersList: Array<Filter.AsObject>,
  }
}

export class OracleSpec extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  clearPubKeysList(): void;
  getPubKeysList(): Array<string>;
  setPubKeysList(value: Array<string>): void;
  addPubKeys(value: string, index?: number): string;

  clearFiltersList(): void;
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  addFilters(value?: Filter, index?: number): Filter;

  getStatus(): OracleSpec.StatusMap[keyof OracleSpec.StatusMap];
  setStatus(value: OracleSpec.StatusMap[keyof OracleSpec.StatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OracleSpec.AsObject;
  static toObject(includeInstance: boolean, msg: OracleSpec): OracleSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OracleSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OracleSpec;
  static deserializeBinaryFromReader(message: OracleSpec, reader: jspb.BinaryReader): OracleSpec;
}

export namespace OracleSpec {
  export type AsObject = {
    id: string,
    createdAt: number,
    updatedAt: number,
    pubKeysList: Array<string>,
    filtersList: Array<Filter.AsObject>,
    status: OracleSpec.StatusMap[keyof OracleSpec.StatusMap],
  }

  export interface StatusMap {
    STATUS_UNSPECIFIED: 0;
    STATUS_ACTIVE: 1;
    STATUS_DEACTIVATED: 2;
  }

  export const Status: StatusMap;
}

export class Filter extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): PropertyKey | undefined;
  setKey(value?: PropertyKey): void;

  clearConditionsList(): void;
  getConditionsList(): Array<Condition>;
  setConditionsList(value: Array<Condition>): void;
  addConditions(value?: Condition, index?: number): Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    key?: PropertyKey.AsObject,
    conditionsList: Array<Condition.AsObject>,
  }
}

export class PropertyKey extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): PropertyKey.TypeMap[keyof PropertyKey.TypeMap];
  setType(value: PropertyKey.TypeMap[keyof PropertyKey.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyKey.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyKey): PropertyKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyKey;
  static deserializeBinaryFromReader(message: PropertyKey, reader: jspb.BinaryReader): PropertyKey;
}

export namespace PropertyKey {
  export type AsObject = {
    name: string,
    type: PropertyKey.TypeMap[keyof PropertyKey.TypeMap],
  }

  export interface TypeMap {
    TYPE_UNSPECIFIED: 0;
    TYPE_EMPTY: 1;
    TYPE_INTEGER: 2;
    TYPE_STRING: 3;
    TYPE_BOOLEAN: 4;
    TYPE_DECIMAL: 5;
    TYPE_TIMESTAMP: 6;
  }

  export const Type: TypeMap;
}

export class Condition extends jspb.Message {
  getOperator(): Condition.OperatorMap[keyof Condition.OperatorMap];
  setOperator(value: Condition.OperatorMap[keyof Condition.OperatorMap]): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Condition.AsObject;
  static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Condition;
  static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
  export type AsObject = {
    operator: Condition.OperatorMap[keyof Condition.OperatorMap],
    value: string,
  }

  export interface OperatorMap {
    OPERATOR_UNSPECIFIED: 0;
    OPERATOR_EQUALS: 1;
    OPERATOR_GREATER_THAN: 2;
    OPERATOR_GREATER_THAN_OR_EQUAL: 3;
    OPERATOR_LESS_THAN: 4;
    OPERATOR_LESS_THAN_OR_EQUAL: 5;
  }

  export const Operator: OperatorMap;
}

