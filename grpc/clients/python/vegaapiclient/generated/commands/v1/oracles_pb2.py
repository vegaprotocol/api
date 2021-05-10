# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: commands/v1/oracles.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='commands/v1/oracles.proto',
  package='vega.commands.v1',
  syntax='proto3',
  serialized_options=b'\n io.vegaprotocol.vega.commands.v1Z+code.vegaprotocol.io/vega/proto/commands/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x19\x63ommands/v1/oracles.proto\x12\x10vega.commands.v1\"\xcb\x01\n\x14OracleDataSubmission\x12K\n\x06source\x18\x01 \x01(\x0e\x32\x33.vega.commands.v1.OracleDataSubmission.OracleSourceR\x06source\x12\x18\n\x07payload\x18\x02 \x01(\x0cR\x07payload\"L\n\x0cOracleSource\x12\x1d\n\x19ORACLE_SOURCE_UNSPECIFIED\x10\x00\x12\x1d\n\x19ORACLE_SOURCE_OPEN_ORACLE\x10\x01\x42O\n io.vegaprotocol.vega.commands.v1Z+code.vegaprotocol.io/vega/proto/commands/v1b\x06proto3'
)



_ORACLEDATASUBMISSION_ORACLESOURCE = _descriptor.EnumDescriptor(
  name='OracleSource',
  full_name='vega.commands.v1.OracleDataSubmission.OracleSource',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='ORACLE_SOURCE_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='ORACLE_SOURCE_OPEN_ORACLE', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=175,
  serialized_end=251,
)
_sym_db.RegisterEnumDescriptor(_ORACLEDATASUBMISSION_ORACLESOURCE)


_ORACLEDATASUBMISSION = _descriptor.Descriptor(
  name='OracleDataSubmission',
  full_name='vega.commands.v1.OracleDataSubmission',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='source', full_name='vega.commands.v1.OracleDataSubmission.source', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='source', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='payload', full_name='vega.commands.v1.OracleDataSubmission.payload', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='payload', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _ORACLEDATASUBMISSION_ORACLESOURCE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=48,
  serialized_end=251,
)

_ORACLEDATASUBMISSION.fields_by_name['source'].enum_type = _ORACLEDATASUBMISSION_ORACLESOURCE
_ORACLEDATASUBMISSION_ORACLESOURCE.containing_type = _ORACLEDATASUBMISSION
DESCRIPTOR.message_types_by_name['OracleDataSubmission'] = _ORACLEDATASUBMISSION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

OracleDataSubmission = _reflection.GeneratedProtocolMessageType('OracleDataSubmission', (_message.Message,), {
  'DESCRIPTOR' : _ORACLEDATASUBMISSION,
  '__module__' : 'commands.v1.oracles_pb2'
  # @@protoc_insertion_point(class_scope:vega.commands.v1.OracleDataSubmission)
  })
_sym_db.RegisterMessage(OracleDataSubmission)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)