// package: validator
// file: external/github.com/mwitkow/go-proto-validators/validator.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class FieldValidator extends jspb.Message {
  hasRegex(): boolean;
  clearRegex(): void;
  getRegex(): string | undefined;
  setRegex(value: string): void;

  hasIntGt(): boolean;
  clearIntGt(): void;
  getIntGt(): number | undefined;
  setIntGt(value: number): void;

  hasIntLt(): boolean;
  clearIntLt(): void;
  getIntLt(): number | undefined;
  setIntLt(value: number): void;

  hasMsgExists(): boolean;
  clearMsgExists(): void;
  getMsgExists(): boolean | undefined;
  setMsgExists(value: boolean): void;

  hasHumanError(): boolean;
  clearHumanError(): void;
  getHumanError(): string | undefined;
  setHumanError(value: string): void;

  hasFloatGt(): boolean;
  clearFloatGt(): void;
  getFloatGt(): number | undefined;
  setFloatGt(value: number): void;

  hasFloatLt(): boolean;
  clearFloatLt(): void;
  getFloatLt(): number | undefined;
  setFloatLt(value: number): void;

  hasFloatEpsilon(): boolean;
  clearFloatEpsilon(): void;
  getFloatEpsilon(): number | undefined;
  setFloatEpsilon(value: number): void;

  hasFloatGte(): boolean;
  clearFloatGte(): void;
  getFloatGte(): number | undefined;
  setFloatGte(value: number): void;

  hasFloatLte(): boolean;
  clearFloatLte(): void;
  getFloatLte(): number | undefined;
  setFloatLte(value: number): void;

  hasStringNotEmpty(): boolean;
  clearStringNotEmpty(): void;
  getStringNotEmpty(): boolean | undefined;
  setStringNotEmpty(value: boolean): void;

  hasRepeatedCountMin(): boolean;
  clearRepeatedCountMin(): void;
  getRepeatedCountMin(): number | undefined;
  setRepeatedCountMin(value: number): void;

  hasRepeatedCountMax(): boolean;
  clearRepeatedCountMax(): void;
  getRepeatedCountMax(): number | undefined;
  setRepeatedCountMax(value: number): void;

  hasLengthGt(): boolean;
  clearLengthGt(): void;
  getLengthGt(): number | undefined;
  setLengthGt(value: number): void;

  hasLengthLt(): boolean;
  clearLengthLt(): void;
  getLengthLt(): number | undefined;
  setLengthLt(value: number): void;

  hasLengthEq(): boolean;
  clearLengthEq(): void;
  getLengthEq(): number | undefined;
  setLengthEq(value: number): void;

  hasIsInEnum(): boolean;
  clearIsInEnum(): void;
  getIsInEnum(): boolean | undefined;
  setIsInEnum(value: boolean): void;

  hasUuidVer(): boolean;
  clearUuidVer(): void;
  getUuidVer(): number | undefined;
  setUuidVer(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldValidator.AsObject;
  static toObject(includeInstance: boolean, msg: FieldValidator): FieldValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldValidator;
  static deserializeBinaryFromReader(message: FieldValidator, reader: jspb.BinaryReader): FieldValidator;
}

export namespace FieldValidator {
  export type AsObject = {
    regex?: string,
    intGt?: number,
    intLt?: number,
    msgExists?: boolean,
    humanError?: string,
    floatGt?: number,
    floatLt?: number,
    floatEpsilon?: number,
    floatGte?: number,
    floatLte?: number,
    stringNotEmpty?: boolean,
    repeatedCountMin?: number,
    repeatedCountMax?: number,
    lengthGt?: number,
    lengthLt?: number,
    lengthEq?: number,
    isInEnum?: boolean,
    uuidVer?: number,
  }
}

export class OneofValidator extends jspb.Message {
  hasRequired(): boolean;
  clearRequired(): void;
  getRequired(): boolean | undefined;
  setRequired(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofValidator.AsObject;
  static toObject(includeInstance: boolean, msg: OneofValidator): OneofValidator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OneofValidator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofValidator;
  static deserializeBinaryFromReader(message: OneofValidator, reader: jspb.BinaryReader): OneofValidator;
}

export namespace OneofValidator {
  export type AsObject = {
    required?: boolean,
  }
}

  export const field: jspb.ExtensionFieldInfo<FieldValidator>;

  export const oneof: jspb.ExtensionFieldInfo<OneofValidator>;

