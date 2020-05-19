# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/markets.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/markets.proto',
  package='vega',
  syntax='proto3',
  serialized_options=b'Z\037code.vegaprotocol.io/vega/proto',
  serialized_pb=b'\n\x13proto/markets.proto\x12\x04vega\"%\n\x11\x43ontinuousTrading\x12\x10\n\x08tickSize\x18\x01 \x01(\x04\"#\n\x0f\x44iscreteTrading\x12\x10\n\x08\x64uration\x18\x01 \x01(\x03\"a\n\x06\x46uture\x12\x10\n\x08maturity\x18\x01 \x01(\t\x12\r\n\x05\x61sset\x18\x02 \x01(\t\x12,\n\rethereumEvent\x18\x64 \x01(\x0b\x32\x13.vega.EthereumEventH\x00\x42\x08\n\x06oracle\"A\n\rEthereumEvent\x12\x12\n\ncontractID\x18\x01 \x01(\t\x12\r\n\x05\x65vent\x18\x02 \x01(\t\x12\r\n\x05value\x18\x03 \x01(\x04\"\"\n\x12InstrumentMetadata\x12\x0c\n\x04tags\x18\x01 \x03(\t\"\xca\x01\n\nInstrument\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x10\n\x08\x62\x61seName\x18\x04 \x01(\t\x12\x11\n\tquoteName\x18\x05 \x01(\t\x12*\n\x08metadata\x18\x06 \x01(\x0b\x32\x18.vega.InstrumentMetadata\x12\x18\n\x10initialMarkPrice\x18\x07 \x01(\x04\x12\x1e\n\x06\x66uture\x18\x64 \x01(\x0b\x32\x0c.vega.FutureH\x00\x42\t\n\x07product\"l\n\x12LogNormalRiskModel\x12\x1d\n\x15riskAversionParameter\x18\x01 \x01(\x01\x12\x0b\n\x03tau\x18\x02 \x01(\x01\x12*\n\x06params\x18\x03 \x01(\x0b\x32\x1a.vega.LogNormalModelParams\"<\n\x14LogNormalModelParams\x12\n\n\x02mu\x18\x01 \x01(\x01\x12\t\n\x01r\x18\x02 \x01(\x01\x12\r\n\x05sigma\x18\x03 \x01(\x01\":\n\x0fSimpleRiskModel\x12\'\n\x06params\x18\x01 \x01(\x0b\x32\x17.vega.SimpleModelParams\"<\n\x11SimpleModelParams\x12\x12\n\nfactorLong\x18\x01 \x01(\x01\x12\x13\n\x0b\x66\x61\x63torShort\x18\x02 \x01(\x01\"\x95\x01\n\x11\x45xternalRiskModel\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06socket\x18\x02 \x01(\t\x12\x33\n\x06\x63onfig\x18\x03 \x03(\x0b\x32#.vega.ExternalRiskModel.ConfigEntry\x1a-\n\x0b\x43onfigEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"W\n\x0eScalingFactors\x12\x13\n\x0bsearchLevel\x18\x01 \x01(\x01\x12\x15\n\rinitialMargin\x18\x02 \x01(\x01\x12\x19\n\x11\x63ollateralRelease\x18\x03 \x01(\x01\"@\n\x10MarginCalculator\x12,\n\x0escalingFactors\x18\x01 \x01(\x0b\x32\x14.vega.ScalingFactors\"\x99\x02\n\x12TradableInstrument\x12$\n\ninstrument\x18\x01 \x01(\x0b\x32\x10.vega.Instrument\x12\x30\n\x10marginCalculator\x18\x02 \x01(\x0b\x32\x16.vega.MarginCalculator\x12\x36\n\x12logNormalRiskModel\x18\x64 \x01(\x0b\x32\x18.vega.LogNormalRiskModelH\x00\x12\x34\n\x11\x65xternalRiskModel\x18\x65 \x01(\x0b\x32\x17.vega.ExternalRiskModelH\x00\x12\x30\n\x0fsimpleRiskModel\x18\x66 \x01(\x0b\x32\x15.vega.SimpleRiskModelH\x00\x42\x0b\n\triskModel\"\xd8\x01\n\x06Market\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x34\n\x12tradableInstrument\x18\x03 \x01(\x0b\x32\x18.vega.TradableInstrument\x12\x15\n\rdecimalPlaces\x18\x04 \x01(\x04\x12-\n\ncontinuous\x18\x64 \x01(\x0b\x32\x17.vega.ContinuousTradingH\x00\x12)\n\x08\x64iscrete\x18\x65 \x01(\x0b\x32\x15.vega.DiscreteTradingH\x00\x42\r\n\x0btradingModeB!Z\x1f\x63ode.vegaprotocol.io/vega/protob\x06proto3'
)




_CONTINUOUSTRADING = _descriptor.Descriptor(
  name='ContinuousTrading',
  full_name='vega.ContinuousTrading',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tickSize', full_name='vega.ContinuousTrading.tickSize', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=29,
  serialized_end=66,
)


_DISCRETETRADING = _descriptor.Descriptor(
  name='DiscreteTrading',
  full_name='vega.DiscreteTrading',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='duration', full_name='vega.DiscreteTrading.duration', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=68,
  serialized_end=103,
)


_FUTURE = _descriptor.Descriptor(
  name='Future',
  full_name='vega.Future',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='maturity', full_name='vega.Future.maturity', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='asset', full_name='vega.Future.asset', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ethereumEvent', full_name='vega.Future.ethereumEvent', index=2,
      number=100, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
      name='oracle', full_name='vega.Future.oracle',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=105,
  serialized_end=202,
)


_ETHEREUMEVENT = _descriptor.Descriptor(
  name='EthereumEvent',
  full_name='vega.EthereumEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='contractID', full_name='vega.EthereumEvent.contractID', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='event', full_name='vega.EthereumEvent.event', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='vega.EthereumEvent.value', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=204,
  serialized_end=269,
)


_INSTRUMENTMETADATA = _descriptor.Descriptor(
  name='InstrumentMetadata',
  full_name='vega.InstrumentMetadata',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tags', full_name='vega.InstrumentMetadata.tags', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=271,
  serialized_end=305,
)


_INSTRUMENT = _descriptor.Descriptor(
  name='Instrument',
  full_name='vega.Instrument',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='vega.Instrument.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='code', full_name='vega.Instrument.code', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='vega.Instrument.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='baseName', full_name='vega.Instrument.baseName', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='quoteName', full_name='vega.Instrument.quoteName', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='metadata', full_name='vega.Instrument.metadata', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='initialMarkPrice', full_name='vega.Instrument.initialMarkPrice', index=6,
      number=7, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='future', full_name='vega.Instrument.future', index=7,
      number=100, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
      name='product', full_name='vega.Instrument.product',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=308,
  serialized_end=510,
)


_LOGNORMALRISKMODEL = _descriptor.Descriptor(
  name='LogNormalRiskModel',
  full_name='vega.LogNormalRiskModel',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='riskAversionParameter', full_name='vega.LogNormalRiskModel.riskAversionParameter', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tau', full_name='vega.LogNormalRiskModel.tau', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='params', full_name='vega.LogNormalRiskModel.params', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=512,
  serialized_end=620,
)


_LOGNORMALMODELPARAMS = _descriptor.Descriptor(
  name='LogNormalModelParams',
  full_name='vega.LogNormalModelParams',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='mu', full_name='vega.LogNormalModelParams.mu', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='r', full_name='vega.LogNormalModelParams.r', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sigma', full_name='vega.LogNormalModelParams.sigma', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=622,
  serialized_end=682,
)


_SIMPLERISKMODEL = _descriptor.Descriptor(
  name='SimpleRiskModel',
  full_name='vega.SimpleRiskModel',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='params', full_name='vega.SimpleRiskModel.params', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=684,
  serialized_end=742,
)


_SIMPLEMODELPARAMS = _descriptor.Descriptor(
  name='SimpleModelParams',
  full_name='vega.SimpleModelParams',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='factorLong', full_name='vega.SimpleModelParams.factorLong', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='factorShort', full_name='vega.SimpleModelParams.factorShort', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=744,
  serialized_end=804,
)


_EXTERNALRISKMODEL_CONFIGENTRY = _descriptor.Descriptor(
  name='ConfigEntry',
  full_name='vega.ExternalRiskModel.ConfigEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='vega.ExternalRiskModel.ConfigEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='vega.ExternalRiskModel.ConfigEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=911,
  serialized_end=956,
)

_EXTERNALRISKMODEL = _descriptor.Descriptor(
  name='ExternalRiskModel',
  full_name='vega.ExternalRiskModel',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='vega.ExternalRiskModel.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='socket', full_name='vega.ExternalRiskModel.socket', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='config', full_name='vega.ExternalRiskModel.config', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_EXTERNALRISKMODEL_CONFIGENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=807,
  serialized_end=956,
)


_SCALINGFACTORS = _descriptor.Descriptor(
  name='ScalingFactors',
  full_name='vega.ScalingFactors',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='searchLevel', full_name='vega.ScalingFactors.searchLevel', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='initialMargin', full_name='vega.ScalingFactors.initialMargin', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='collateralRelease', full_name='vega.ScalingFactors.collateralRelease', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=958,
  serialized_end=1045,
)


_MARGINCALCULATOR = _descriptor.Descriptor(
  name='MarginCalculator',
  full_name='vega.MarginCalculator',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='scalingFactors', full_name='vega.MarginCalculator.scalingFactors', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=1047,
  serialized_end=1111,
)


_TRADABLEINSTRUMENT = _descriptor.Descriptor(
  name='TradableInstrument',
  full_name='vega.TradableInstrument',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='instrument', full_name='vega.TradableInstrument.instrument', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='marginCalculator', full_name='vega.TradableInstrument.marginCalculator', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='logNormalRiskModel', full_name='vega.TradableInstrument.logNormalRiskModel', index=2,
      number=100, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='externalRiskModel', full_name='vega.TradableInstrument.externalRiskModel', index=3,
      number=101, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='simpleRiskModel', full_name='vega.TradableInstrument.simpleRiskModel', index=4,
      number=102, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
      name='riskModel', full_name='vega.TradableInstrument.riskModel',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1114,
  serialized_end=1395,
)


_MARKET = _descriptor.Descriptor(
  name='Market',
  full_name='vega.Market',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='vega.Market.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='vega.Market.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tradableInstrument', full_name='vega.Market.tradableInstrument', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='decimalPlaces', full_name='vega.Market.decimalPlaces', index=3,
      number=4, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='continuous', full_name='vega.Market.continuous', index=4,
      number=100, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='discrete', full_name='vega.Market.discrete', index=5,
      number=101, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
      name='tradingMode', full_name='vega.Market.tradingMode',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=1398,
  serialized_end=1614,
)

_FUTURE.fields_by_name['ethereumEvent'].message_type = _ETHEREUMEVENT
_FUTURE.oneofs_by_name['oracle'].fields.append(
  _FUTURE.fields_by_name['ethereumEvent'])
_FUTURE.fields_by_name['ethereumEvent'].containing_oneof = _FUTURE.oneofs_by_name['oracle']
_INSTRUMENT.fields_by_name['metadata'].message_type = _INSTRUMENTMETADATA
_INSTRUMENT.fields_by_name['future'].message_type = _FUTURE
_INSTRUMENT.oneofs_by_name['product'].fields.append(
  _INSTRUMENT.fields_by_name['future'])
_INSTRUMENT.fields_by_name['future'].containing_oneof = _INSTRUMENT.oneofs_by_name['product']
_LOGNORMALRISKMODEL.fields_by_name['params'].message_type = _LOGNORMALMODELPARAMS
_SIMPLERISKMODEL.fields_by_name['params'].message_type = _SIMPLEMODELPARAMS
_EXTERNALRISKMODEL_CONFIGENTRY.containing_type = _EXTERNALRISKMODEL
_EXTERNALRISKMODEL.fields_by_name['config'].message_type = _EXTERNALRISKMODEL_CONFIGENTRY
_MARGINCALCULATOR.fields_by_name['scalingFactors'].message_type = _SCALINGFACTORS
_TRADABLEINSTRUMENT.fields_by_name['instrument'].message_type = _INSTRUMENT
_TRADABLEINSTRUMENT.fields_by_name['marginCalculator'].message_type = _MARGINCALCULATOR
_TRADABLEINSTRUMENT.fields_by_name['logNormalRiskModel'].message_type = _LOGNORMALRISKMODEL
_TRADABLEINSTRUMENT.fields_by_name['externalRiskModel'].message_type = _EXTERNALRISKMODEL
_TRADABLEINSTRUMENT.fields_by_name['simpleRiskModel'].message_type = _SIMPLERISKMODEL
_TRADABLEINSTRUMENT.oneofs_by_name['riskModel'].fields.append(
  _TRADABLEINSTRUMENT.fields_by_name['logNormalRiskModel'])
_TRADABLEINSTRUMENT.fields_by_name['logNormalRiskModel'].containing_oneof = _TRADABLEINSTRUMENT.oneofs_by_name['riskModel']
_TRADABLEINSTRUMENT.oneofs_by_name['riskModel'].fields.append(
  _TRADABLEINSTRUMENT.fields_by_name['externalRiskModel'])
_TRADABLEINSTRUMENT.fields_by_name['externalRiskModel'].containing_oneof = _TRADABLEINSTRUMENT.oneofs_by_name['riskModel']
_TRADABLEINSTRUMENT.oneofs_by_name['riskModel'].fields.append(
  _TRADABLEINSTRUMENT.fields_by_name['simpleRiskModel'])
_TRADABLEINSTRUMENT.fields_by_name['simpleRiskModel'].containing_oneof = _TRADABLEINSTRUMENT.oneofs_by_name['riskModel']
_MARKET.fields_by_name['tradableInstrument'].message_type = _TRADABLEINSTRUMENT
_MARKET.fields_by_name['continuous'].message_type = _CONTINUOUSTRADING
_MARKET.fields_by_name['discrete'].message_type = _DISCRETETRADING
_MARKET.oneofs_by_name['tradingMode'].fields.append(
  _MARKET.fields_by_name['continuous'])
_MARKET.fields_by_name['continuous'].containing_oneof = _MARKET.oneofs_by_name['tradingMode']
_MARKET.oneofs_by_name['tradingMode'].fields.append(
  _MARKET.fields_by_name['discrete'])
_MARKET.fields_by_name['discrete'].containing_oneof = _MARKET.oneofs_by_name['tradingMode']
DESCRIPTOR.message_types_by_name['ContinuousTrading'] = _CONTINUOUSTRADING
DESCRIPTOR.message_types_by_name['DiscreteTrading'] = _DISCRETETRADING
DESCRIPTOR.message_types_by_name['Future'] = _FUTURE
DESCRIPTOR.message_types_by_name['EthereumEvent'] = _ETHEREUMEVENT
DESCRIPTOR.message_types_by_name['InstrumentMetadata'] = _INSTRUMENTMETADATA
DESCRIPTOR.message_types_by_name['Instrument'] = _INSTRUMENT
DESCRIPTOR.message_types_by_name['LogNormalRiskModel'] = _LOGNORMALRISKMODEL
DESCRIPTOR.message_types_by_name['LogNormalModelParams'] = _LOGNORMALMODELPARAMS
DESCRIPTOR.message_types_by_name['SimpleRiskModel'] = _SIMPLERISKMODEL
DESCRIPTOR.message_types_by_name['SimpleModelParams'] = _SIMPLEMODELPARAMS
DESCRIPTOR.message_types_by_name['ExternalRiskModel'] = _EXTERNALRISKMODEL
DESCRIPTOR.message_types_by_name['ScalingFactors'] = _SCALINGFACTORS
DESCRIPTOR.message_types_by_name['MarginCalculator'] = _MARGINCALCULATOR
DESCRIPTOR.message_types_by_name['TradableInstrument'] = _TRADABLEINSTRUMENT
DESCRIPTOR.message_types_by_name['Market'] = _MARKET
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ContinuousTrading = _reflection.GeneratedProtocolMessageType('ContinuousTrading', (_message.Message,), {
  'DESCRIPTOR' : _CONTINUOUSTRADING,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.ContinuousTrading)
  })
_sym_db.RegisterMessage(ContinuousTrading)

DiscreteTrading = _reflection.GeneratedProtocolMessageType('DiscreteTrading', (_message.Message,), {
  'DESCRIPTOR' : _DISCRETETRADING,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.DiscreteTrading)
  })
_sym_db.RegisterMessage(DiscreteTrading)

Future = _reflection.GeneratedProtocolMessageType('Future', (_message.Message,), {
  'DESCRIPTOR' : _FUTURE,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.Future)
  })
_sym_db.RegisterMessage(Future)

EthereumEvent = _reflection.GeneratedProtocolMessageType('EthereumEvent', (_message.Message,), {
  'DESCRIPTOR' : _ETHEREUMEVENT,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.EthereumEvent)
  })
_sym_db.RegisterMessage(EthereumEvent)

InstrumentMetadata = _reflection.GeneratedProtocolMessageType('InstrumentMetadata', (_message.Message,), {
  'DESCRIPTOR' : _INSTRUMENTMETADATA,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.InstrumentMetadata)
  })
_sym_db.RegisterMessage(InstrumentMetadata)

Instrument = _reflection.GeneratedProtocolMessageType('Instrument', (_message.Message,), {
  'DESCRIPTOR' : _INSTRUMENT,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.Instrument)
  })
_sym_db.RegisterMessage(Instrument)

LogNormalRiskModel = _reflection.GeneratedProtocolMessageType('LogNormalRiskModel', (_message.Message,), {
  'DESCRIPTOR' : _LOGNORMALRISKMODEL,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.LogNormalRiskModel)
  })
_sym_db.RegisterMessage(LogNormalRiskModel)

LogNormalModelParams = _reflection.GeneratedProtocolMessageType('LogNormalModelParams', (_message.Message,), {
  'DESCRIPTOR' : _LOGNORMALMODELPARAMS,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.LogNormalModelParams)
  })
_sym_db.RegisterMessage(LogNormalModelParams)

SimpleRiskModel = _reflection.GeneratedProtocolMessageType('SimpleRiskModel', (_message.Message,), {
  'DESCRIPTOR' : _SIMPLERISKMODEL,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.SimpleRiskModel)
  })
_sym_db.RegisterMessage(SimpleRiskModel)

SimpleModelParams = _reflection.GeneratedProtocolMessageType('SimpleModelParams', (_message.Message,), {
  'DESCRIPTOR' : _SIMPLEMODELPARAMS,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.SimpleModelParams)
  })
_sym_db.RegisterMessage(SimpleModelParams)

ExternalRiskModel = _reflection.GeneratedProtocolMessageType('ExternalRiskModel', (_message.Message,), {

  'ConfigEntry' : _reflection.GeneratedProtocolMessageType('ConfigEntry', (_message.Message,), {
    'DESCRIPTOR' : _EXTERNALRISKMODEL_CONFIGENTRY,
    '__module__' : 'proto.markets_pb2'
    # @@protoc_insertion_point(class_scope:vega.ExternalRiskModel.ConfigEntry)
    })
  ,
  'DESCRIPTOR' : _EXTERNALRISKMODEL,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.ExternalRiskModel)
  })
_sym_db.RegisterMessage(ExternalRiskModel)
_sym_db.RegisterMessage(ExternalRiskModel.ConfigEntry)

ScalingFactors = _reflection.GeneratedProtocolMessageType('ScalingFactors', (_message.Message,), {
  'DESCRIPTOR' : _SCALINGFACTORS,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.ScalingFactors)
  })
_sym_db.RegisterMessage(ScalingFactors)

MarginCalculator = _reflection.GeneratedProtocolMessageType('MarginCalculator', (_message.Message,), {
  'DESCRIPTOR' : _MARGINCALCULATOR,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.MarginCalculator)
  })
_sym_db.RegisterMessage(MarginCalculator)

TradableInstrument = _reflection.GeneratedProtocolMessageType('TradableInstrument', (_message.Message,), {
  'DESCRIPTOR' : _TRADABLEINSTRUMENT,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.TradableInstrument)
  })
_sym_db.RegisterMessage(TradableInstrument)

Market = _reflection.GeneratedProtocolMessageType('Market', (_message.Message,), {
  'DESCRIPTOR' : _MARKET,
  '__module__' : 'proto.markets_pb2'
  # @@protoc_insertion_point(class_scope:vega.Market)
  })
_sym_db.RegisterMessage(Market)


DESCRIPTOR._options = None
_EXTERNALRISKMODEL_CONFIGENTRY._options = None
# @@protoc_insertion_point(module_scope)
