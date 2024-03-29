# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: commands/v1/validator_commands.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ... import chain_events_pb2 as chain__events__pb2
from ...github.com.mwitkow.go_proto_validators import validator_pb2 as github_dot_com_dot_mwitkow_dot_go__proto__validators_dot_validator__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='commands/v1/validator_commands.proto',
  package='vega.commands.v1',
  syntax='proto3',
  serialized_options=b'\n io.vegaprotocol.vega.commands.v1Z+code.vegaprotocol.io/vega/proto/commands/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n$commands/v1/validator_commands.proto\x12\x10vega.commands.v1\x1a\x12\x63hain_events.proto\x1a\x36github.com/mwitkow/go-proto-validators/validator.proto\"\xa4\x01\n\x10NodeRegistration\x12\x1f\n\x07pub_key\x18\x01 \x01(\x0c\x42\x06\xe2\xdf\x1f\x02X\x01R\x06pubKey\x12*\n\rchain_pub_key\x18\x02 \x01(\x0c\x42\x06\xe2\xdf\x1f\x02X\x01R\x0b\x63hainPubKey\x12!\n\x08info_url\x18\x03 \x01(\tB\x06\xe2\xdf\x1f\x02X\x01R\x07infoUrl\x12 \n\x07\x63ountry\x18\x04 \x01(\tB\x06\xe2\xdf\x1f\x02X\x01R\x07\x63ountry\"Q\n\x08NodeVote\x12\x1f\n\x07pub_key\x18\x01 \x01(\x0c\x42\x06\xe2\xdf\x1f\x02X\x01R\x06pubKey\x12$\n\treference\x18\x02 \x01(\tB\x06\xe2\xdf\x1f\x02X\x01R\treference\"j\n\rNodeSignature\x12\x0e\n\x02id\x18\x01 \x01(\tR\x02id\x12\x10\n\x03sig\x18\x02 \x01(\x0cR\x03sig\x12\x37\n\x04kind\x18\x03 \x01(\x0e\x32#.vega.commands.v1.NodeSignatureKindR\x04kind\"\xfd\x01\n\nChainEvent\x12\x13\n\x05tx_id\x18\x01 \x01(\tR\x04txId\x12\x14\n\x05nonce\x18\x02 \x01(\x04R\x05nonce\x12\x34\n\x07\x62uiltin\x18\xe9\x07 \x01(\x0b\x32\x17.vega.BuiltinAssetEventH\x00R\x07\x62uiltin\x12)\n\x05\x65rc20\x18\xea\x07 \x01(\x0b\x32\x10.vega.ERC20EventH\x00R\x05\x65rc20\x12#\n\x03\x62tc\x18\xeb\x07 \x01(\x0b\x32\x0e.vega.BTCEventH\x00R\x03\x62tc\x12\x35\n\tvalidator\x18\xec\x07 \x01(\x0b\x32\x14.vega.ValidatorEventH\x00R\tvalidatorB\x07\n\x05\x65vent*\x85\x01\n\x11NodeSignatureKind\x12#\n\x1fNODE_SIGNATURE_KIND_UNSPECIFIED\x10\x00\x12!\n\x1dNODE_SIGNATURE_KIND_ASSET_NEW\x10\x01\x12(\n$NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL\x10\x02\x42O\n io.vegaprotocol.vega.commands.v1Z+code.vegaprotocol.io/vega/proto/commands/v1b\x06proto3'
  ,
  dependencies=[chain__events__pb2.DESCRIPTOR,github_dot_com_dot_mwitkow_dot_go__proto__validators_dot_validator__pb2.DESCRIPTOR,])

_NODESIGNATUREKIND = _descriptor.EnumDescriptor(
  name='NodeSignatureKind',
  full_name='vega.commands.v1.NodeSignatureKind',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NODE_SIGNATURE_KIND_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='NODE_SIGNATURE_KIND_ASSET_NEW', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=749,
  serialized_end=882,
)
_sym_db.RegisterEnumDescriptor(_NODESIGNATUREKIND)

NodeSignatureKind = enum_type_wrapper.EnumTypeWrapper(_NODESIGNATUREKIND)
NODE_SIGNATURE_KIND_UNSPECIFIED = 0
NODE_SIGNATURE_KIND_ASSET_NEW = 1
NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL = 2



_NODEREGISTRATION = _descriptor.Descriptor(
  name='NodeRegistration',
  full_name='vega.commands.v1.NodeRegistration',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='pub_key', full_name='vega.commands.v1.NodeRegistration.pub_key', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', json_name='pubKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='chain_pub_key', full_name='vega.commands.v1.NodeRegistration.chain_pub_key', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', json_name='chainPubKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='info_url', full_name='vega.commands.v1.NodeRegistration.info_url', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', json_name='infoUrl', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='country', full_name='vega.commands.v1.NodeRegistration.country', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', json_name='country', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=135,
  serialized_end=299,
)


_NODEVOTE = _descriptor.Descriptor(
  name='NodeVote',
  full_name='vega.commands.v1.NodeVote',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='pub_key', full_name='vega.commands.v1.NodeVote.pub_key', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', json_name='pubKey', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='reference', full_name='vega.commands.v1.NodeVote.reference', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', json_name='reference', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=301,
  serialized_end=382,
)


_NODESIGNATURE = _descriptor.Descriptor(
  name='NodeSignature',
  full_name='vega.commands.v1.NodeSignature',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='vega.commands.v1.NodeSignature.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='sig', full_name='vega.commands.v1.NodeSignature.sig', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='sig', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='kind', full_name='vega.commands.v1.NodeSignature.kind', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='kind', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=384,
  serialized_end=490,
)


_CHAINEVENT = _descriptor.Descriptor(
  name='ChainEvent',
  full_name='vega.commands.v1.ChainEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='tx_id', full_name='vega.commands.v1.ChainEvent.tx_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='txId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='nonce', full_name='vega.commands.v1.ChainEvent.nonce', index=1,
      number=2, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='nonce', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='builtin', full_name='vega.commands.v1.ChainEvent.builtin', index=2,
      number=1001, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='builtin', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='erc20', full_name='vega.commands.v1.ChainEvent.erc20', index=3,
      number=1002, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='erc20', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='btc', full_name='vega.commands.v1.ChainEvent.btc', index=4,
      number=1003, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='btc', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='validator', full_name='vega.commands.v1.ChainEvent.validator', index=5,
      number=1004, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='validator', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='event', full_name='vega.commands.v1.ChainEvent.event',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=493,
  serialized_end=746,
)

_NODESIGNATURE.fields_by_name['kind'].enum_type = _NODESIGNATUREKIND
_CHAINEVENT.fields_by_name['builtin'].message_type = chain__events__pb2._BUILTINASSETEVENT
_CHAINEVENT.fields_by_name['erc20'].message_type = chain__events__pb2._ERC20EVENT
_CHAINEVENT.fields_by_name['btc'].message_type = chain__events__pb2._BTCEVENT
_CHAINEVENT.fields_by_name['validator'].message_type = chain__events__pb2._VALIDATOREVENT
_CHAINEVENT.oneofs_by_name['event'].fields.append(
  _CHAINEVENT.fields_by_name['builtin'])
_CHAINEVENT.fields_by_name['builtin'].containing_oneof = _CHAINEVENT.oneofs_by_name['event']
_CHAINEVENT.oneofs_by_name['event'].fields.append(
  _CHAINEVENT.fields_by_name['erc20'])
_CHAINEVENT.fields_by_name['erc20'].containing_oneof = _CHAINEVENT.oneofs_by_name['event']
_CHAINEVENT.oneofs_by_name['event'].fields.append(
  _CHAINEVENT.fields_by_name['btc'])
_CHAINEVENT.fields_by_name['btc'].containing_oneof = _CHAINEVENT.oneofs_by_name['event']
_CHAINEVENT.oneofs_by_name['event'].fields.append(
  _CHAINEVENT.fields_by_name['validator'])
_CHAINEVENT.fields_by_name['validator'].containing_oneof = _CHAINEVENT.oneofs_by_name['event']
DESCRIPTOR.message_types_by_name['NodeRegistration'] = _NODEREGISTRATION
DESCRIPTOR.message_types_by_name['NodeVote'] = _NODEVOTE
DESCRIPTOR.message_types_by_name['NodeSignature'] = _NODESIGNATURE
DESCRIPTOR.message_types_by_name['ChainEvent'] = _CHAINEVENT
DESCRIPTOR.enum_types_by_name['NodeSignatureKind'] = _NODESIGNATUREKIND
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

NodeRegistration = _reflection.GeneratedProtocolMessageType('NodeRegistration', (_message.Message,), {
  'DESCRIPTOR' : _NODEREGISTRATION,
  '__module__' : 'commands.v1.validator_commands_pb2'
  # @@protoc_insertion_point(class_scope:vega.commands.v1.NodeRegistration)
  })
_sym_db.RegisterMessage(NodeRegistration)

NodeVote = _reflection.GeneratedProtocolMessageType('NodeVote', (_message.Message,), {
  'DESCRIPTOR' : _NODEVOTE,
  '__module__' : 'commands.v1.validator_commands_pb2'
  # @@protoc_insertion_point(class_scope:vega.commands.v1.NodeVote)
  })
_sym_db.RegisterMessage(NodeVote)

NodeSignature = _reflection.GeneratedProtocolMessageType('NodeSignature', (_message.Message,), {
  'DESCRIPTOR' : _NODESIGNATURE,
  '__module__' : 'commands.v1.validator_commands_pb2'
  # @@protoc_insertion_point(class_scope:vega.commands.v1.NodeSignature)
  })
_sym_db.RegisterMessage(NodeSignature)

ChainEvent = _reflection.GeneratedProtocolMessageType('ChainEvent', (_message.Message,), {
  'DESCRIPTOR' : _CHAINEVENT,
  '__module__' : 'commands.v1.validator_commands_pb2'
  # @@protoc_insertion_point(class_scope:vega.commands.v1.ChainEvent)
  })
_sym_db.RegisterMessage(ChainEvent)


DESCRIPTOR._options = None
_NODEREGISTRATION.fields_by_name['pub_key']._options = None
_NODEREGISTRATION.fields_by_name['chain_pub_key']._options = None
_NODEREGISTRATION.fields_by_name['info_url']._options = None
_NODEREGISTRATION.fields_by_name['country']._options = None
_NODEVOTE.fields_by_name['pub_key']._options = None
_NODEVOTE.fields_by_name['reference']._options = None
# @@protoc_insertion_point(module_scope)
