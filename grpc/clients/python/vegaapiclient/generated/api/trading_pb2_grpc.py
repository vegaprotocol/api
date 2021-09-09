# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from . import trading_pb2 as api_dot_trading__pb2


class TradingServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SubmitTransactionV2 = channel.unary_unary(
                '/api.v1.TradingService/SubmitTransactionV2',
                request_serializer=api_dot_trading__pb2.SubmitTransactionV2Request.SerializeToString,
                response_deserializer=api_dot_trading__pb2.SubmitTransactionV2Response.FromString,
                )
        self.PropagateChainEvent = channel.unary_unary(
                '/api.v1.TradingService/PropagateChainEvent',
                request_serializer=api_dot_trading__pb2.PropagateChainEventRequest.SerializeToString,
                response_deserializer=api_dot_trading__pb2.PropagateChainEventResponse.FromString,
                )
        self.Statistics = channel.unary_unary(
                '/api.v1.TradingService/Statistics',
                request_serializer=api_dot_trading__pb2.StatisticsRequest.SerializeToString,
                response_deserializer=api_dot_trading__pb2.StatisticsResponse.FromString,
                )
        self.LastBlockHeight = channel.unary_unary(
                '/api.v1.TradingService/LastBlockHeight',
                request_serializer=api_dot_trading__pb2.LastBlockHeightRequest.SerializeToString,
                response_deserializer=api_dot_trading__pb2.LastBlockHeightResponse.FromString,
                )
        self.GetVegaTime = channel.unary_unary(
                '/api.v1.TradingService/GetVegaTime',
                request_serializer=api_dot_trading__pb2.GetVegaTimeRequest.SerializeToString,
                response_deserializer=api_dot_trading__pb2.GetVegaTimeResponse.FromString,
                )
        self.ObserveEventBus = channel.stream_stream(
                '/api.v1.TradingService/ObserveEventBus',
                request_serializer=api_dot_trading__pb2.ObserveEventBusRequest.SerializeToString,
                response_deserializer=api_dot_trading__pb2.ObserveEventBusResponse.FromString,
                )


class TradingServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SubmitTransactionV2(self, request, context):
        """Submit a signed transaction (v2)
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def PropagateChainEvent(self, request, context):
        """Propagate a chain event
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Statistics(self, request, context):
        """Get Statistics on Vega
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def LastBlockHeight(self, request, context):
        """Get the height of the last tendermint block
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetVegaTime(self, request, context):
        """Get Time
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ObserveEventBus(self, request_iterator, context):
        """Subscribe to a stream of events from the core
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_TradingServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SubmitTransactionV2': grpc.unary_unary_rpc_method_handler(
                    servicer.SubmitTransactionV2,
                    request_deserializer=api_dot_trading__pb2.SubmitTransactionV2Request.FromString,
                    response_serializer=api_dot_trading__pb2.SubmitTransactionV2Response.SerializeToString,
            ),
            'PropagateChainEvent': grpc.unary_unary_rpc_method_handler(
                    servicer.PropagateChainEvent,
                    request_deserializer=api_dot_trading__pb2.PropagateChainEventRequest.FromString,
                    response_serializer=api_dot_trading__pb2.PropagateChainEventResponse.SerializeToString,
            ),
            'Statistics': grpc.unary_unary_rpc_method_handler(
                    servicer.Statistics,
                    request_deserializer=api_dot_trading__pb2.StatisticsRequest.FromString,
                    response_serializer=api_dot_trading__pb2.StatisticsResponse.SerializeToString,
            ),
            'LastBlockHeight': grpc.unary_unary_rpc_method_handler(
                    servicer.LastBlockHeight,
                    request_deserializer=api_dot_trading__pb2.LastBlockHeightRequest.FromString,
                    response_serializer=api_dot_trading__pb2.LastBlockHeightResponse.SerializeToString,
            ),
            'GetVegaTime': grpc.unary_unary_rpc_method_handler(
                    servicer.GetVegaTime,
                    request_deserializer=api_dot_trading__pb2.GetVegaTimeRequest.FromString,
                    response_serializer=api_dot_trading__pb2.GetVegaTimeResponse.SerializeToString,
            ),
            'ObserveEventBus': grpc.stream_stream_rpc_method_handler(
                    servicer.ObserveEventBus,
                    request_deserializer=api_dot_trading__pb2.ObserveEventBusRequest.FromString,
                    response_serializer=api_dot_trading__pb2.ObserveEventBusResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.v1.TradingService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class TradingService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SubmitTransactionV2(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TradingService/SubmitTransactionV2',
            api_dot_trading__pb2.SubmitTransactionV2Request.SerializeToString,
            api_dot_trading__pb2.SubmitTransactionV2Response.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def PropagateChainEvent(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TradingService/PropagateChainEvent',
            api_dot_trading__pb2.PropagateChainEventRequest.SerializeToString,
            api_dot_trading__pb2.PropagateChainEventResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Statistics(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TradingService/Statistics',
            api_dot_trading__pb2.StatisticsRequest.SerializeToString,
            api_dot_trading__pb2.StatisticsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def LastBlockHeight(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TradingService/LastBlockHeight',
            api_dot_trading__pb2.LastBlockHeightRequest.SerializeToString,
            api_dot_trading__pb2.LastBlockHeightResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetVegaTime(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/api.v1.TradingService/GetVegaTime',
            api_dot_trading__pb2.GetVegaTimeRequest.SerializeToString,
            api_dot_trading__pb2.GetVegaTimeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ObserveEventBus(request_iterator,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.stream_stream(request_iterator, target, '/api.v1.TradingService/ObserveEventBus',
            api_dot_trading__pb2.ObserveEventBusRequest.SerializeToString,
            api_dot_trading__pb2.ObserveEventBusResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
