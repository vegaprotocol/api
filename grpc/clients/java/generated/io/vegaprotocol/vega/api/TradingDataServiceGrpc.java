package io.vegaprotocol.vega.api;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.37.0)",
    comments = "Source: api/trading.proto")
public final class TradingDataServiceGrpc {

  private TradingDataServiceGrpc() {}

  public static final String SERVICE_NAME = "api.v1.TradingDataService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketAccountsRequest,
      io.vegaprotocol.vega.api.Trading.MarketAccountsResponse> getMarketAccountsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketAccounts",
      requestType = io.vegaprotocol.vega.api.Trading.MarketAccountsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketAccountsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketAccountsRequest,
      io.vegaprotocol.vega.api.Trading.MarketAccountsResponse> getMarketAccountsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketAccountsRequest, io.vegaprotocol.vega.api.Trading.MarketAccountsResponse> getMarketAccountsMethod;
    if ((getMarketAccountsMethod = TradingDataServiceGrpc.getMarketAccountsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketAccountsMethod = TradingDataServiceGrpc.getMarketAccountsMethod) == null) {
          TradingDataServiceGrpc.getMarketAccountsMethod = getMarketAccountsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketAccountsRequest, io.vegaprotocol.vega.api.Trading.MarketAccountsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketAccounts"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketAccountsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketAccountsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketAccounts"))
              .build();
        }
      }
    }
    return getMarketAccountsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartyAccountsRequest,
      io.vegaprotocol.vega.api.Trading.PartyAccountsResponse> getPartyAccountsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PartyAccounts",
      requestType = io.vegaprotocol.vega.api.Trading.PartyAccountsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PartyAccountsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartyAccountsRequest,
      io.vegaprotocol.vega.api.Trading.PartyAccountsResponse> getPartyAccountsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartyAccountsRequest, io.vegaprotocol.vega.api.Trading.PartyAccountsResponse> getPartyAccountsMethod;
    if ((getPartyAccountsMethod = TradingDataServiceGrpc.getPartyAccountsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getPartyAccountsMethod = TradingDataServiceGrpc.getPartyAccountsMethod) == null) {
          TradingDataServiceGrpc.getPartyAccountsMethod = getPartyAccountsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PartyAccountsRequest, io.vegaprotocol.vega.api.Trading.PartyAccountsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PartyAccounts"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PartyAccountsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PartyAccountsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("PartyAccounts"))
              .build();
        }
      }
    }
    return getPartyAccountsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest,
      io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse> getFeeInfrastructureAccountsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "FeeInfrastructureAccounts",
      requestType = io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest,
      io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse> getFeeInfrastructureAccountsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest, io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse> getFeeInfrastructureAccountsMethod;
    if ((getFeeInfrastructureAccountsMethod = TradingDataServiceGrpc.getFeeInfrastructureAccountsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getFeeInfrastructureAccountsMethod = TradingDataServiceGrpc.getFeeInfrastructureAccountsMethod) == null) {
          TradingDataServiceGrpc.getFeeInfrastructureAccountsMethod = getFeeInfrastructureAccountsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest, io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "FeeInfrastructureAccounts"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("FeeInfrastructureAccounts"))
              .build();
        }
      }
    }
    return getFeeInfrastructureAccountsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.CandlesRequest,
      io.vegaprotocol.vega.api.Trading.CandlesResponse> getCandlesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Candles",
      requestType = io.vegaprotocol.vega.api.Trading.CandlesRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.CandlesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.CandlesRequest,
      io.vegaprotocol.vega.api.Trading.CandlesResponse> getCandlesMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.CandlesRequest, io.vegaprotocol.vega.api.Trading.CandlesResponse> getCandlesMethod;
    if ((getCandlesMethod = TradingDataServiceGrpc.getCandlesMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getCandlesMethod = TradingDataServiceGrpc.getCandlesMethod) == null) {
          TradingDataServiceGrpc.getCandlesMethod = getCandlesMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.CandlesRequest, io.vegaprotocol.vega.api.Trading.CandlesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Candles"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.CandlesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.CandlesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Candles"))
              .build();
        }
      }
    }
    return getCandlesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest,
      io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse> getMarketDataByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketDataByID",
      requestType = io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest,
      io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse> getMarketDataByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest, io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse> getMarketDataByIDMethod;
    if ((getMarketDataByIDMethod = TradingDataServiceGrpc.getMarketDataByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketDataByIDMethod = TradingDataServiceGrpc.getMarketDataByIDMethod) == null) {
          TradingDataServiceGrpc.getMarketDataByIDMethod = getMarketDataByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest, io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketDataByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketDataByID"))
              .build();
        }
      }
    }
    return getMarketDataByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsDataRequest,
      io.vegaprotocol.vega.api.Trading.MarketsDataResponse> getMarketsDataMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketsData",
      requestType = io.vegaprotocol.vega.api.Trading.MarketsDataRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketsDataResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsDataRequest,
      io.vegaprotocol.vega.api.Trading.MarketsDataResponse> getMarketsDataMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsDataRequest, io.vegaprotocol.vega.api.Trading.MarketsDataResponse> getMarketsDataMethod;
    if ((getMarketsDataMethod = TradingDataServiceGrpc.getMarketsDataMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketsDataMethod = TradingDataServiceGrpc.getMarketsDataMethod) == null) {
          TradingDataServiceGrpc.getMarketsDataMethod = getMarketsDataMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketsDataRequest, io.vegaprotocol.vega.api.Trading.MarketsDataResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketsData"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketsDataRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketsDataResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketsData"))
              .build();
        }
      }
    }
    return getMarketsDataMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketByIDRequest,
      io.vegaprotocol.vega.api.Trading.MarketByIDResponse> getMarketByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketByID",
      requestType = io.vegaprotocol.vega.api.Trading.MarketByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketByIDRequest,
      io.vegaprotocol.vega.api.Trading.MarketByIDResponse> getMarketByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketByIDRequest, io.vegaprotocol.vega.api.Trading.MarketByIDResponse> getMarketByIDMethod;
    if ((getMarketByIDMethod = TradingDataServiceGrpc.getMarketByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketByIDMethod = TradingDataServiceGrpc.getMarketByIDMethod) == null) {
          TradingDataServiceGrpc.getMarketByIDMethod = getMarketByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketByIDRequest, io.vegaprotocol.vega.api.Trading.MarketByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketByID"))
              .build();
        }
      }
    }
    return getMarketByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthRequest,
      io.vegaprotocol.vega.api.Trading.MarketDepthResponse> getMarketDepthMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketDepth",
      requestType = io.vegaprotocol.vega.api.Trading.MarketDepthRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketDepthResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthRequest,
      io.vegaprotocol.vega.api.Trading.MarketDepthResponse> getMarketDepthMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthRequest, io.vegaprotocol.vega.api.Trading.MarketDepthResponse> getMarketDepthMethod;
    if ((getMarketDepthMethod = TradingDataServiceGrpc.getMarketDepthMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketDepthMethod = TradingDataServiceGrpc.getMarketDepthMethod) == null) {
          TradingDataServiceGrpc.getMarketDepthMethod = getMarketDepthMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketDepthRequest, io.vegaprotocol.vega.api.Trading.MarketDepthResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketDepth"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDepthRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDepthResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketDepth"))
              .build();
        }
      }
    }
    return getMarketDepthMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsRequest,
      io.vegaprotocol.vega.api.Trading.MarketsResponse> getMarketsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Markets",
      requestType = io.vegaprotocol.vega.api.Trading.MarketsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsRequest,
      io.vegaprotocol.vega.api.Trading.MarketsResponse> getMarketsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsRequest, io.vegaprotocol.vega.api.Trading.MarketsResponse> getMarketsMethod;
    if ((getMarketsMethod = TradingDataServiceGrpc.getMarketsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketsMethod = TradingDataServiceGrpc.getMarketsMethod) == null) {
          TradingDataServiceGrpc.getMarketsMethod = getMarketsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketsRequest, io.vegaprotocol.vega.api.Trading.MarketsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Markets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Markets"))
              .build();
        }
      }
    }
    return getMarketsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest,
      io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse> getOrderByMarketAndIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrderByMarketAndID",
      requestType = io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest,
      io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse> getOrderByMarketAndIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest, io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse> getOrderByMarketAndIDMethod;
    if ((getOrderByMarketAndIDMethod = TradingDataServiceGrpc.getOrderByMarketAndIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrderByMarketAndIDMethod = TradingDataServiceGrpc.getOrderByMarketAndIDMethod) == null) {
          TradingDataServiceGrpc.getOrderByMarketAndIDMethod = getOrderByMarketAndIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest, io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrderByMarketAndID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrderByMarketAndID"))
              .build();
        }
      }
    }
    return getOrderByMarketAndIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest,
      io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse> getOrderByReferenceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrderByReference",
      requestType = io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest,
      io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse> getOrderByReferenceMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest, io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse> getOrderByReferenceMethod;
    if ((getOrderByReferenceMethod = TradingDataServiceGrpc.getOrderByReferenceMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrderByReferenceMethod = TradingDataServiceGrpc.getOrderByReferenceMethod) == null) {
          TradingDataServiceGrpc.getOrderByReferenceMethod = getOrderByReferenceMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest, io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrderByReference"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrderByReference"))
              .build();
        }
      }
    }
    return getOrderByReferenceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest,
      io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse> getOrdersByMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrdersByMarket",
      requestType = io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest,
      io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse> getOrdersByMarketMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest, io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse> getOrdersByMarketMethod;
    if ((getOrdersByMarketMethod = TradingDataServiceGrpc.getOrdersByMarketMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrdersByMarketMethod = TradingDataServiceGrpc.getOrdersByMarketMethod) == null) {
          TradingDataServiceGrpc.getOrdersByMarketMethod = getOrdersByMarketMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest, io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrdersByMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrdersByMarket"))
              .build();
        }
      }
    }
    return getOrdersByMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest,
      io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse> getOrdersByPartyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrdersByParty",
      requestType = io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest,
      io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse> getOrdersByPartyMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest, io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse> getOrdersByPartyMethod;
    if ((getOrdersByPartyMethod = TradingDataServiceGrpc.getOrdersByPartyMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrdersByPartyMethod = TradingDataServiceGrpc.getOrdersByPartyMethod) == null) {
          TradingDataServiceGrpc.getOrdersByPartyMethod = getOrdersByPartyMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest, io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrdersByParty"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrdersByParty"))
              .build();
        }
      }
    }
    return getOrdersByPartyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByIDRequest,
      io.vegaprotocol.vega.api.Trading.OrderByIDResponse> getOrderByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrderByID",
      requestType = io.vegaprotocol.vega.api.Trading.OrderByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrderByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByIDRequest,
      io.vegaprotocol.vega.api.Trading.OrderByIDResponse> getOrderByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderByIDRequest, io.vegaprotocol.vega.api.Trading.OrderByIDResponse> getOrderByIDMethod;
    if ((getOrderByIDMethod = TradingDataServiceGrpc.getOrderByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrderByIDMethod = TradingDataServiceGrpc.getOrderByIDMethod) == null) {
          TradingDataServiceGrpc.getOrderByIDMethod = getOrderByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrderByIDRequest, io.vegaprotocol.vega.api.Trading.OrderByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrderByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrderByID"))
              .build();
        }
      }
    }
    return getOrderByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest,
      io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse> getOrderVersionsByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrderVersionsByID",
      requestType = io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest,
      io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse> getOrderVersionsByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest, io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse> getOrderVersionsByIDMethod;
    if ((getOrderVersionsByIDMethod = TradingDataServiceGrpc.getOrderVersionsByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrderVersionsByIDMethod = TradingDataServiceGrpc.getOrderVersionsByIDMethod) == null) {
          TradingDataServiceGrpc.getOrderVersionsByIDMethod = getOrderVersionsByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest, io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrderVersionsByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrderVersionsByID"))
              .build();
        }
      }
    }
    return getOrderVersionsByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarginLevelsRequest,
      io.vegaprotocol.vega.api.Trading.MarginLevelsResponse> getMarginLevelsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarginLevels",
      requestType = io.vegaprotocol.vega.api.Trading.MarginLevelsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarginLevelsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarginLevelsRequest,
      io.vegaprotocol.vega.api.Trading.MarginLevelsResponse> getMarginLevelsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarginLevelsRequest, io.vegaprotocol.vega.api.Trading.MarginLevelsResponse> getMarginLevelsMethod;
    if ((getMarginLevelsMethod = TradingDataServiceGrpc.getMarginLevelsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarginLevelsMethod = TradingDataServiceGrpc.getMarginLevelsMethod) == null) {
          TradingDataServiceGrpc.getMarginLevelsMethod = getMarginLevelsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarginLevelsRequest, io.vegaprotocol.vega.api.Trading.MarginLevelsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarginLevels"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarginLevelsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarginLevelsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarginLevels"))
              .build();
        }
      }
    }
    return getMarginLevelsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartiesRequest,
      io.vegaprotocol.vega.api.Trading.PartiesResponse> getPartiesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Parties",
      requestType = io.vegaprotocol.vega.api.Trading.PartiesRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PartiesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartiesRequest,
      io.vegaprotocol.vega.api.Trading.PartiesResponse> getPartiesMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartiesRequest, io.vegaprotocol.vega.api.Trading.PartiesResponse> getPartiesMethod;
    if ((getPartiesMethod = TradingDataServiceGrpc.getPartiesMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getPartiesMethod = TradingDataServiceGrpc.getPartiesMethod) == null) {
          TradingDataServiceGrpc.getPartiesMethod = getPartiesMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PartiesRequest, io.vegaprotocol.vega.api.Trading.PartiesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Parties"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PartiesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PartiesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Parties"))
              .build();
        }
      }
    }
    return getPartiesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartyByIDRequest,
      io.vegaprotocol.vega.api.Trading.PartyByIDResponse> getPartyByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PartyByID",
      requestType = io.vegaprotocol.vega.api.Trading.PartyByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PartyByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartyByIDRequest,
      io.vegaprotocol.vega.api.Trading.PartyByIDResponse> getPartyByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PartyByIDRequest, io.vegaprotocol.vega.api.Trading.PartyByIDResponse> getPartyByIDMethod;
    if ((getPartyByIDMethod = TradingDataServiceGrpc.getPartyByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getPartyByIDMethod = TradingDataServiceGrpc.getPartyByIDMethod) == null) {
          TradingDataServiceGrpc.getPartyByIDMethod = getPartyByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PartyByIDRequest, io.vegaprotocol.vega.api.Trading.PartyByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PartyByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PartyByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PartyByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("PartyByID"))
              .build();
        }
      }
    }
    return getPartyByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest,
      io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse> getPositionsByPartyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PositionsByParty",
      requestType = io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest,
      io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse> getPositionsByPartyMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest, io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse> getPositionsByPartyMethod;
    if ((getPositionsByPartyMethod = TradingDataServiceGrpc.getPositionsByPartyMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getPositionsByPartyMethod = TradingDataServiceGrpc.getPositionsByPartyMethod) == null) {
          TradingDataServiceGrpc.getPositionsByPartyMethod = getPositionsByPartyMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest, io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PositionsByParty"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("PositionsByParty"))
              .build();
        }
      }
    }
    return getPositionsByPartyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LastTradeRequest,
      io.vegaprotocol.vega.api.Trading.LastTradeResponse> getLastTradeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "LastTrade",
      requestType = io.vegaprotocol.vega.api.Trading.LastTradeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.LastTradeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LastTradeRequest,
      io.vegaprotocol.vega.api.Trading.LastTradeResponse> getLastTradeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LastTradeRequest, io.vegaprotocol.vega.api.Trading.LastTradeResponse> getLastTradeMethod;
    if ((getLastTradeMethod = TradingDataServiceGrpc.getLastTradeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getLastTradeMethod = TradingDataServiceGrpc.getLastTradeMethod) == null) {
          TradingDataServiceGrpc.getLastTradeMethod = getLastTradeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.LastTradeRequest, io.vegaprotocol.vega.api.Trading.LastTradeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "LastTrade"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.LastTradeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.LastTradeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("LastTrade"))
              .build();
        }
      }
    }
    return getLastTradeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByMarketRequest,
      io.vegaprotocol.vega.api.Trading.TradesByMarketResponse> getTradesByMarketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradesByMarket",
      requestType = io.vegaprotocol.vega.api.Trading.TradesByMarketRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.TradesByMarketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByMarketRequest,
      io.vegaprotocol.vega.api.Trading.TradesByMarketResponse> getTradesByMarketMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByMarketRequest, io.vegaprotocol.vega.api.Trading.TradesByMarketResponse> getTradesByMarketMethod;
    if ((getTradesByMarketMethod = TradingDataServiceGrpc.getTradesByMarketMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getTradesByMarketMethod = TradingDataServiceGrpc.getTradesByMarketMethod) == null) {
          TradingDataServiceGrpc.getTradesByMarketMethod = getTradesByMarketMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.TradesByMarketRequest, io.vegaprotocol.vega.api.Trading.TradesByMarketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradesByMarket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesByMarketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesByMarketResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("TradesByMarket"))
              .build();
        }
      }
    }
    return getTradesByMarketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByOrderRequest,
      io.vegaprotocol.vega.api.Trading.TradesByOrderResponse> getTradesByOrderMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradesByOrder",
      requestType = io.vegaprotocol.vega.api.Trading.TradesByOrderRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.TradesByOrderResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByOrderRequest,
      io.vegaprotocol.vega.api.Trading.TradesByOrderResponse> getTradesByOrderMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByOrderRequest, io.vegaprotocol.vega.api.Trading.TradesByOrderResponse> getTradesByOrderMethod;
    if ((getTradesByOrderMethod = TradingDataServiceGrpc.getTradesByOrderMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getTradesByOrderMethod = TradingDataServiceGrpc.getTradesByOrderMethod) == null) {
          TradingDataServiceGrpc.getTradesByOrderMethod = getTradesByOrderMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.TradesByOrderRequest, io.vegaprotocol.vega.api.Trading.TradesByOrderResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradesByOrder"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesByOrderRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesByOrderResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("TradesByOrder"))
              .build();
        }
      }
    }
    return getTradesByOrderMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByPartyRequest,
      io.vegaprotocol.vega.api.Trading.TradesByPartyResponse> getTradesByPartyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradesByParty",
      requestType = io.vegaprotocol.vega.api.Trading.TradesByPartyRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.TradesByPartyResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByPartyRequest,
      io.vegaprotocol.vega.api.Trading.TradesByPartyResponse> getTradesByPartyMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesByPartyRequest, io.vegaprotocol.vega.api.Trading.TradesByPartyResponse> getTradesByPartyMethod;
    if ((getTradesByPartyMethod = TradingDataServiceGrpc.getTradesByPartyMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getTradesByPartyMethod = TradingDataServiceGrpc.getTradesByPartyMethod) == null) {
          TradingDataServiceGrpc.getTradesByPartyMethod = getTradesByPartyMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.TradesByPartyRequest, io.vegaprotocol.vega.api.Trading.TradesByPartyResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradesByParty"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesByPartyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesByPartyResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("TradesByParty"))
              .build();
        }
      }
    }
    return getTradesByPartyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalsResponse> getGetProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProposals",
      requestType = io.vegaprotocol.vega.api.Trading.GetProposalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalsResponse> getGetProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalsRequest, io.vegaprotocol.vega.api.Trading.GetProposalsResponse> getGetProposalsMethod;
    if ((getGetProposalsMethod = TradingDataServiceGrpc.getGetProposalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetProposalsMethod = TradingDataServiceGrpc.getGetProposalsMethod) == null) {
          TradingDataServiceGrpc.getGetProposalsMethod = getGetProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetProposalsRequest, io.vegaprotocol.vega.api.Trading.GetProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetProposals"))
              .build();
        }
      }
    }
    return getGetProposalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse> getGetProposalsByPartyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProposalsByParty",
      requestType = io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse> getGetProposalsByPartyMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest, io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse> getGetProposalsByPartyMethod;
    if ((getGetProposalsByPartyMethod = TradingDataServiceGrpc.getGetProposalsByPartyMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetProposalsByPartyMethod = TradingDataServiceGrpc.getGetProposalsByPartyMethod) == null) {
          TradingDataServiceGrpc.getGetProposalsByPartyMethod = getGetProposalsByPartyMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest, io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProposalsByParty"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetProposalsByParty"))
              .build();
        }
      }
    }
    return getGetProposalsByPartyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest,
      io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse> getGetVotesByPartyMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetVotesByParty",
      requestType = io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest,
      io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse> getGetVotesByPartyMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest, io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse> getGetVotesByPartyMethod;
    if ((getGetVotesByPartyMethod = TradingDataServiceGrpc.getGetVotesByPartyMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetVotesByPartyMethod = TradingDataServiceGrpc.getGetVotesByPartyMethod) == null) {
          TradingDataServiceGrpc.getGetVotesByPartyMethod = getGetVotesByPartyMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest, io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetVotesByParty"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetVotesByParty"))
              .build();
        }
      }
    }
    return getGetVotesByPartyMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse> getGetNewMarketProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNewMarketProposals",
      requestType = io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse> getGetNewMarketProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest, io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse> getGetNewMarketProposalsMethod;
    if ((getGetNewMarketProposalsMethod = TradingDataServiceGrpc.getGetNewMarketProposalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetNewMarketProposalsMethod = TradingDataServiceGrpc.getGetNewMarketProposalsMethod) == null) {
          TradingDataServiceGrpc.getGetNewMarketProposalsMethod = getGetNewMarketProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest, io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetNewMarketProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetNewMarketProposals"))
              .build();
        }
      }
    }
    return getGetNewMarketProposalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse> getGetUpdateMarketProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetUpdateMarketProposals",
      requestType = io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse> getGetUpdateMarketProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest, io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse> getGetUpdateMarketProposalsMethod;
    if ((getGetUpdateMarketProposalsMethod = TradingDataServiceGrpc.getGetUpdateMarketProposalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetUpdateMarketProposalsMethod = TradingDataServiceGrpc.getGetUpdateMarketProposalsMethod) == null) {
          TradingDataServiceGrpc.getGetUpdateMarketProposalsMethod = getGetUpdateMarketProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest, io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetUpdateMarketProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetUpdateMarketProposals"))
              .build();
        }
      }
    }
    return getGetUpdateMarketProposalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse> getGetNetworkParametersProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNetworkParametersProposals",
      requestType = io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse> getGetNetworkParametersProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest, io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse> getGetNetworkParametersProposalsMethod;
    if ((getGetNetworkParametersProposalsMethod = TradingDataServiceGrpc.getGetNetworkParametersProposalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetNetworkParametersProposalsMethod = TradingDataServiceGrpc.getGetNetworkParametersProposalsMethod) == null) {
          TradingDataServiceGrpc.getGetNetworkParametersProposalsMethod = getGetNetworkParametersProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest, io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetNetworkParametersProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetNetworkParametersProposals"))
              .build();
        }
      }
    }
    return getGetNetworkParametersProposalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse> getGetNewAssetProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNewAssetProposals",
      requestType = io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest,
      io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse> getGetNewAssetProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest, io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse> getGetNewAssetProposalsMethod;
    if ((getGetNewAssetProposalsMethod = TradingDataServiceGrpc.getGetNewAssetProposalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetNewAssetProposalsMethod = TradingDataServiceGrpc.getGetNewAssetProposalsMethod) == null) {
          TradingDataServiceGrpc.getGetNewAssetProposalsMethod = getGetNewAssetProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest, io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetNewAssetProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetNewAssetProposals"))
              .build();
        }
      }
    }
    return getGetNewAssetProposalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse> getGetProposalByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProposalByID",
      requestType = io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse> getGetProposalByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest, io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse> getGetProposalByIDMethod;
    if ((getGetProposalByIDMethod = TradingDataServiceGrpc.getGetProposalByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetProposalByIDMethod = TradingDataServiceGrpc.getGetProposalByIDMethod) == null) {
          TradingDataServiceGrpc.getGetProposalByIDMethod = getGetProposalByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest, io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProposalByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetProposalByID"))
              .build();
        }
      }
    }
    return getGetProposalByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse> getGetProposalByReferenceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetProposalByReference",
      requestType = io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest,
      io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse> getGetProposalByReferenceMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest, io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse> getGetProposalByReferenceMethod;
    if ((getGetProposalByReferenceMethod = TradingDataServiceGrpc.getGetProposalByReferenceMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetProposalByReferenceMethod = TradingDataServiceGrpc.getGetProposalByReferenceMethod) == null) {
          TradingDataServiceGrpc.getGetProposalByReferenceMethod = getGetProposalByReferenceMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest, io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetProposalByReference"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetProposalByReference"))
              .build();
        }
      }
    }
    return getGetProposalByReferenceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest,
      io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse> getObserveGovernanceMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ObserveGovernance",
      requestType = io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest,
      io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse> getObserveGovernanceMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest, io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse> getObserveGovernanceMethod;
    if ((getObserveGovernanceMethod = TradingDataServiceGrpc.getObserveGovernanceMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getObserveGovernanceMethod = TradingDataServiceGrpc.getObserveGovernanceMethod) == null) {
          TradingDataServiceGrpc.getObserveGovernanceMethod = getObserveGovernanceMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest, io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ObserveGovernance"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("ObserveGovernance"))
              .build();
        }
      }
    }
    return getObserveGovernanceMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest,
      io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse> getObservePartyProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ObservePartyProposals",
      requestType = io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest,
      io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse> getObservePartyProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest, io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse> getObservePartyProposalsMethod;
    if ((getObservePartyProposalsMethod = TradingDataServiceGrpc.getObservePartyProposalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getObservePartyProposalsMethod = TradingDataServiceGrpc.getObservePartyProposalsMethod) == null) {
          TradingDataServiceGrpc.getObservePartyProposalsMethod = getObservePartyProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest, io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ObservePartyProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("ObservePartyProposals"))
              .build();
        }
      }
    }
    return getObservePartyProposalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest,
      io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse> getObservePartyVotesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ObservePartyVotes",
      requestType = io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest,
      io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse> getObservePartyVotesMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest, io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse> getObservePartyVotesMethod;
    if ((getObservePartyVotesMethod = TradingDataServiceGrpc.getObservePartyVotesMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getObservePartyVotesMethod = TradingDataServiceGrpc.getObservePartyVotesMethod) == null) {
          TradingDataServiceGrpc.getObservePartyVotesMethod = getObservePartyVotesMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest, io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ObservePartyVotes"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("ObservePartyVotes"))
              .build();
        }
      }
    }
    return getObservePartyVotesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest,
      io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse> getObserveProposalVotesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ObserveProposalVotes",
      requestType = io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest,
      io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse> getObserveProposalVotesMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest, io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse> getObserveProposalVotesMethod;
    if ((getObserveProposalVotesMethod = TradingDataServiceGrpc.getObserveProposalVotesMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getObserveProposalVotesMethod = TradingDataServiceGrpc.getObserveProposalVotesMethod) == null) {
          TradingDataServiceGrpc.getObserveProposalVotesMethod = getObserveProposalVotesMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest, io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ObserveProposalVotes"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("ObserveProposalVotes"))
              .build();
        }
      }
    }
    return getObserveProposalVotesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest,
      io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> getObserveEventBusMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ObserveEventBus",
      requestType = io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest,
      io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> getObserveEventBusMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest, io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> getObserveEventBusMethod;
    if ((getObserveEventBusMethod = TradingDataServiceGrpc.getObserveEventBusMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getObserveEventBusMethod = TradingDataServiceGrpc.getObserveEventBusMethod) == null) {
          TradingDataServiceGrpc.getObserveEventBusMethod = getObserveEventBusMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest, io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ObserveEventBus"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("ObserveEventBus"))
              .build();
        }
      }
    }
    return getObserveEventBusMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.StatisticsRequest,
      io.vegaprotocol.vega.api.Trading.StatisticsResponse> getStatisticsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Statistics",
      requestType = io.vegaprotocol.vega.api.Trading.StatisticsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.StatisticsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.StatisticsRequest,
      io.vegaprotocol.vega.api.Trading.StatisticsResponse> getStatisticsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.StatisticsRequest, io.vegaprotocol.vega.api.Trading.StatisticsResponse> getStatisticsMethod;
    if ((getStatisticsMethod = TradingDataServiceGrpc.getStatisticsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getStatisticsMethod = TradingDataServiceGrpc.getStatisticsMethod) == null) {
          TradingDataServiceGrpc.getStatisticsMethod = getStatisticsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.StatisticsRequest, io.vegaprotocol.vega.api.Trading.StatisticsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Statistics"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.StatisticsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.StatisticsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Statistics"))
              .build();
        }
      }
    }
    return getStatisticsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest,
      io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse> getGetVegaTimeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetVegaTime",
      requestType = io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest,
      io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse> getGetVegaTimeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest, io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse> getGetVegaTimeMethod;
    if ((getGetVegaTimeMethod = TradingDataServiceGrpc.getGetVegaTimeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetVegaTimeMethod = TradingDataServiceGrpc.getGetVegaTimeMethod) == null) {
          TradingDataServiceGrpc.getGetVegaTimeMethod = getGetVegaTimeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest, io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetVegaTime"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetVegaTime"))
              .build();
        }
      }
    }
    return getGetVegaTimeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse> getAccountsSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AccountsSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse> getAccountsSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest, io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse> getAccountsSubscribeMethod;
    if ((getAccountsSubscribeMethod = TradingDataServiceGrpc.getAccountsSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getAccountsSubscribeMethod = TradingDataServiceGrpc.getAccountsSubscribeMethod) == null) {
          TradingDataServiceGrpc.getAccountsSubscribeMethod = getAccountsSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest, io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AccountsSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("AccountsSubscribe"))
              .build();
        }
      }
    }
    return getAccountsSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse> getCandlesSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CandlesSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse> getCandlesSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest, io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse> getCandlesSubscribeMethod;
    if ((getCandlesSubscribeMethod = TradingDataServiceGrpc.getCandlesSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getCandlesSubscribeMethod = TradingDataServiceGrpc.getCandlesSubscribeMethod) == null) {
          TradingDataServiceGrpc.getCandlesSubscribeMethod = getCandlesSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest, io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CandlesSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("CandlesSubscribe"))
              .build();
        }
      }
    }
    return getCandlesSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse> getMarginLevelsSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarginLevelsSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse> getMarginLevelsSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse> getMarginLevelsSubscribeMethod;
    if ((getMarginLevelsSubscribeMethod = TradingDataServiceGrpc.getMarginLevelsSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarginLevelsSubscribeMethod = TradingDataServiceGrpc.getMarginLevelsSubscribeMethod) == null) {
          TradingDataServiceGrpc.getMarginLevelsSubscribeMethod = getMarginLevelsSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarginLevelsSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarginLevelsSubscribe"))
              .build();
        }
      }
    }
    return getMarginLevelsSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse> getMarketDepthSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketDepthSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse> getMarketDepthSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse> getMarketDepthSubscribeMethod;
    if ((getMarketDepthSubscribeMethod = TradingDataServiceGrpc.getMarketDepthSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketDepthSubscribeMethod = TradingDataServiceGrpc.getMarketDepthSubscribeMethod) == null) {
          TradingDataServiceGrpc.getMarketDepthSubscribeMethod = getMarketDepthSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketDepthSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketDepthSubscribe"))
              .build();
        }
      }
    }
    return getMarketDepthSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse> getMarketDepthUpdatesSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketDepthUpdatesSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse> getMarketDepthUpdatesSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse> getMarketDepthUpdatesSubscribeMethod;
    if ((getMarketDepthUpdatesSubscribeMethod = TradingDataServiceGrpc.getMarketDepthUpdatesSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketDepthUpdatesSubscribeMethod = TradingDataServiceGrpc.getMarketDepthUpdatesSubscribeMethod) == null) {
          TradingDataServiceGrpc.getMarketDepthUpdatesSubscribeMethod = getMarketDepthUpdatesSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketDepthUpdatesSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketDepthUpdatesSubscribe"))
              .build();
        }
      }
    }
    return getMarketDepthUpdatesSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse> getMarketsDataSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "MarketsDataSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse> getMarketsDataSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse> getMarketsDataSubscribeMethod;
    if ((getMarketsDataSubscribeMethod = TradingDataServiceGrpc.getMarketsDataSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getMarketsDataSubscribeMethod = TradingDataServiceGrpc.getMarketsDataSubscribeMethod) == null) {
          TradingDataServiceGrpc.getMarketsDataSubscribeMethod = getMarketsDataSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest, io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "MarketsDataSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("MarketsDataSubscribe"))
              .build();
        }
      }
    }
    return getMarketsDataSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse> getOrdersSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OrdersSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse> getOrdersSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest, io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse> getOrdersSubscribeMethod;
    if ((getOrdersSubscribeMethod = TradingDataServiceGrpc.getOrdersSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOrdersSubscribeMethod = TradingDataServiceGrpc.getOrdersSubscribeMethod) == null) {
          TradingDataServiceGrpc.getOrdersSubscribeMethod = getOrdersSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest, io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OrdersSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OrdersSubscribe"))
              .build();
        }
      }
    }
    return getOrdersSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse> getPositionsSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PositionsSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse> getPositionsSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest, io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse> getPositionsSubscribeMethod;
    if ((getPositionsSubscribeMethod = TradingDataServiceGrpc.getPositionsSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getPositionsSubscribeMethod = TradingDataServiceGrpc.getPositionsSubscribeMethod) == null) {
          TradingDataServiceGrpc.getPositionsSubscribeMethod = getPositionsSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest, io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PositionsSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("PositionsSubscribe"))
              .build();
        }
      }
    }
    return getPositionsSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse> getTradesSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TradesSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse> getTradesSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest, io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse> getTradesSubscribeMethod;
    if ((getTradesSubscribeMethod = TradingDataServiceGrpc.getTradesSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getTradesSubscribeMethod = TradingDataServiceGrpc.getTradesSubscribeMethod) == null) {
          TradingDataServiceGrpc.getTradesSubscribeMethod = getTradesSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest, io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TradesSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("TradesSubscribe"))
              .build();
        }
      }
    }
    return getTradesSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse> getTransferResponsesSubscribeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TransferResponsesSubscribe",
      requestType = io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest,
      io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse> getTransferResponsesSubscribeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest, io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse> getTransferResponsesSubscribeMethod;
    if ((getTransferResponsesSubscribeMethod = TradingDataServiceGrpc.getTransferResponsesSubscribeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getTransferResponsesSubscribeMethod = TradingDataServiceGrpc.getTransferResponsesSubscribeMethod) == null) {
          TradingDataServiceGrpc.getTransferResponsesSubscribeMethod = getTransferResponsesSubscribeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest, io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TransferResponsesSubscribe"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("TransferResponsesSubscribe"))
              .build();
        }
      }
    }
    return getTransferResponsesSubscribeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest,
      io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse> getGetNodeSignaturesAggregateMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNodeSignaturesAggregate",
      requestType = io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest,
      io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse> getGetNodeSignaturesAggregateMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest, io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse> getGetNodeSignaturesAggregateMethod;
    if ((getGetNodeSignaturesAggregateMethod = TradingDataServiceGrpc.getGetNodeSignaturesAggregateMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getGetNodeSignaturesAggregateMethod = TradingDataServiceGrpc.getGetNodeSignaturesAggregateMethod) == null) {
          TradingDataServiceGrpc.getGetNodeSignaturesAggregateMethod = getGetNodeSignaturesAggregateMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest, io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetNodeSignaturesAggregate"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("GetNodeSignaturesAggregate"))
              .build();
        }
      }
    }
    return getGetNodeSignaturesAggregateMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AssetByIDRequest,
      io.vegaprotocol.vega.api.Trading.AssetByIDResponse> getAssetByIDMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "AssetByID",
      requestType = io.vegaprotocol.vega.api.Trading.AssetByIDRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.AssetByIDResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AssetByIDRequest,
      io.vegaprotocol.vega.api.Trading.AssetByIDResponse> getAssetByIDMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AssetByIDRequest, io.vegaprotocol.vega.api.Trading.AssetByIDResponse> getAssetByIDMethod;
    if ((getAssetByIDMethod = TradingDataServiceGrpc.getAssetByIDMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getAssetByIDMethod = TradingDataServiceGrpc.getAssetByIDMethod) == null) {
          TradingDataServiceGrpc.getAssetByIDMethod = getAssetByIDMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.AssetByIDRequest, io.vegaprotocol.vega.api.Trading.AssetByIDResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "AssetByID"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.AssetByIDRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.AssetByIDResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("AssetByID"))
              .build();
        }
      }
    }
    return getAssetByIDMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AssetsRequest,
      io.vegaprotocol.vega.api.Trading.AssetsResponse> getAssetsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Assets",
      requestType = io.vegaprotocol.vega.api.Trading.AssetsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.AssetsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AssetsRequest,
      io.vegaprotocol.vega.api.Trading.AssetsResponse> getAssetsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.AssetsRequest, io.vegaprotocol.vega.api.Trading.AssetsResponse> getAssetsMethod;
    if ((getAssetsMethod = TradingDataServiceGrpc.getAssetsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getAssetsMethod = TradingDataServiceGrpc.getAssetsMethod) == null) {
          TradingDataServiceGrpc.getAssetsMethod = getAssetsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.AssetsRequest, io.vegaprotocol.vega.api.Trading.AssetsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Assets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.AssetsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.AssetsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Assets"))
              .build();
        }
      }
    }
    return getAssetsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.EstimateFeeRequest,
      io.vegaprotocol.vega.api.Trading.EstimateFeeResponse> getEstimateFeeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "EstimateFee",
      requestType = io.vegaprotocol.vega.api.Trading.EstimateFeeRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.EstimateFeeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.EstimateFeeRequest,
      io.vegaprotocol.vega.api.Trading.EstimateFeeResponse> getEstimateFeeMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.EstimateFeeRequest, io.vegaprotocol.vega.api.Trading.EstimateFeeResponse> getEstimateFeeMethod;
    if ((getEstimateFeeMethod = TradingDataServiceGrpc.getEstimateFeeMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getEstimateFeeMethod = TradingDataServiceGrpc.getEstimateFeeMethod) == null) {
          TradingDataServiceGrpc.getEstimateFeeMethod = getEstimateFeeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.EstimateFeeRequest, io.vegaprotocol.vega.api.Trading.EstimateFeeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "EstimateFee"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.EstimateFeeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.EstimateFeeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("EstimateFee"))
              .build();
        }
      }
    }
    return getEstimateFeeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.EstimateMarginRequest,
      io.vegaprotocol.vega.api.Trading.EstimateMarginResponse> getEstimateMarginMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "EstimateMargin",
      requestType = io.vegaprotocol.vega.api.Trading.EstimateMarginRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.EstimateMarginResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.EstimateMarginRequest,
      io.vegaprotocol.vega.api.Trading.EstimateMarginResponse> getEstimateMarginMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.EstimateMarginRequest, io.vegaprotocol.vega.api.Trading.EstimateMarginResponse> getEstimateMarginMethod;
    if ((getEstimateMarginMethod = TradingDataServiceGrpc.getEstimateMarginMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getEstimateMarginMethod = TradingDataServiceGrpc.getEstimateMarginMethod) == null) {
          TradingDataServiceGrpc.getEstimateMarginMethod = getEstimateMarginMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.EstimateMarginRequest, io.vegaprotocol.vega.api.Trading.EstimateMarginResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "EstimateMargin"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.EstimateMarginRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.EstimateMarginResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("EstimateMargin"))
              .build();
        }
      }
    }
    return getEstimateMarginMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest,
      io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse> getERC20WithdrawalApprovalMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ERC20WithdrawalApproval",
      requestType = io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest,
      io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse> getERC20WithdrawalApprovalMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest, io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse> getERC20WithdrawalApprovalMethod;
    if ((getERC20WithdrawalApprovalMethod = TradingDataServiceGrpc.getERC20WithdrawalApprovalMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getERC20WithdrawalApprovalMethod = TradingDataServiceGrpc.getERC20WithdrawalApprovalMethod) == null) {
          TradingDataServiceGrpc.getERC20WithdrawalApprovalMethod = getERC20WithdrawalApprovalMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest, io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ERC20WithdrawalApproval"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("ERC20WithdrawalApproval"))
              .build();
        }
      }
    }
    return getERC20WithdrawalApprovalMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.WithdrawalRequest,
      io.vegaprotocol.vega.api.Trading.WithdrawalResponse> getWithdrawalMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Withdrawal",
      requestType = io.vegaprotocol.vega.api.Trading.WithdrawalRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.WithdrawalResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.WithdrawalRequest,
      io.vegaprotocol.vega.api.Trading.WithdrawalResponse> getWithdrawalMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.WithdrawalRequest, io.vegaprotocol.vega.api.Trading.WithdrawalResponse> getWithdrawalMethod;
    if ((getWithdrawalMethod = TradingDataServiceGrpc.getWithdrawalMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getWithdrawalMethod = TradingDataServiceGrpc.getWithdrawalMethod) == null) {
          TradingDataServiceGrpc.getWithdrawalMethod = getWithdrawalMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.WithdrawalRequest, io.vegaprotocol.vega.api.Trading.WithdrawalResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Withdrawal"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.WithdrawalRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.WithdrawalResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Withdrawal"))
              .build();
        }
      }
    }
    return getWithdrawalMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.WithdrawalsRequest,
      io.vegaprotocol.vega.api.Trading.WithdrawalsResponse> getWithdrawalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Withdrawals",
      requestType = io.vegaprotocol.vega.api.Trading.WithdrawalsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.WithdrawalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.WithdrawalsRequest,
      io.vegaprotocol.vega.api.Trading.WithdrawalsResponse> getWithdrawalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.WithdrawalsRequest, io.vegaprotocol.vega.api.Trading.WithdrawalsResponse> getWithdrawalsMethod;
    if ((getWithdrawalsMethod = TradingDataServiceGrpc.getWithdrawalsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getWithdrawalsMethod = TradingDataServiceGrpc.getWithdrawalsMethod) == null) {
          TradingDataServiceGrpc.getWithdrawalsMethod = getWithdrawalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.WithdrawalsRequest, io.vegaprotocol.vega.api.Trading.WithdrawalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Withdrawals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.WithdrawalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.WithdrawalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Withdrawals"))
              .build();
        }
      }
    }
    return getWithdrawalsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.DepositRequest,
      io.vegaprotocol.vega.api.Trading.DepositResponse> getDepositMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Deposit",
      requestType = io.vegaprotocol.vega.api.Trading.DepositRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.DepositResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.DepositRequest,
      io.vegaprotocol.vega.api.Trading.DepositResponse> getDepositMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.DepositRequest, io.vegaprotocol.vega.api.Trading.DepositResponse> getDepositMethod;
    if ((getDepositMethod = TradingDataServiceGrpc.getDepositMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getDepositMethod = TradingDataServiceGrpc.getDepositMethod) == null) {
          TradingDataServiceGrpc.getDepositMethod = getDepositMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.DepositRequest, io.vegaprotocol.vega.api.Trading.DepositResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Deposit"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.DepositRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.DepositResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Deposit"))
              .build();
        }
      }
    }
    return getDepositMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.DepositsRequest,
      io.vegaprotocol.vega.api.Trading.DepositsResponse> getDepositsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Deposits",
      requestType = io.vegaprotocol.vega.api.Trading.DepositsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.DepositsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.DepositsRequest,
      io.vegaprotocol.vega.api.Trading.DepositsResponse> getDepositsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.DepositsRequest, io.vegaprotocol.vega.api.Trading.DepositsResponse> getDepositsMethod;
    if ((getDepositsMethod = TradingDataServiceGrpc.getDepositsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getDepositsMethod = TradingDataServiceGrpc.getDepositsMethod) == null) {
          TradingDataServiceGrpc.getDepositsMethod = getDepositsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.DepositsRequest, io.vegaprotocol.vega.api.Trading.DepositsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Deposits"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.DepositsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.DepositsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("Deposits"))
              .build();
        }
      }
    }
    return getDepositsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.NetworkParametersRequest,
      io.vegaprotocol.vega.api.Trading.NetworkParametersResponse> getNetworkParametersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "NetworkParameters",
      requestType = io.vegaprotocol.vega.api.Trading.NetworkParametersRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.NetworkParametersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.NetworkParametersRequest,
      io.vegaprotocol.vega.api.Trading.NetworkParametersResponse> getNetworkParametersMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.NetworkParametersRequest, io.vegaprotocol.vega.api.Trading.NetworkParametersResponse> getNetworkParametersMethod;
    if ((getNetworkParametersMethod = TradingDataServiceGrpc.getNetworkParametersMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getNetworkParametersMethod = TradingDataServiceGrpc.getNetworkParametersMethod) == null) {
          TradingDataServiceGrpc.getNetworkParametersMethod = getNetworkParametersMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.NetworkParametersRequest, io.vegaprotocol.vega.api.Trading.NetworkParametersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "NetworkParameters"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.NetworkParametersRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.NetworkParametersResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("NetworkParameters"))
              .build();
        }
      }
    }
    return getNetworkParametersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest,
      io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse> getLiquidityProvisionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "LiquidityProvisions",
      requestType = io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest,
      io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse> getLiquidityProvisionsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest, io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse> getLiquidityProvisionsMethod;
    if ((getLiquidityProvisionsMethod = TradingDataServiceGrpc.getLiquidityProvisionsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getLiquidityProvisionsMethod = TradingDataServiceGrpc.getLiquidityProvisionsMethod) == null) {
          TradingDataServiceGrpc.getLiquidityProvisionsMethod = getLiquidityProvisionsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest, io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "LiquidityProvisions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("LiquidityProvisions"))
              .build();
        }
      }
    }
    return getLiquidityProvisionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleSpecRequest,
      io.vegaprotocol.vega.api.Trading.OracleSpecResponse> getOracleSpecMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OracleSpec",
      requestType = io.vegaprotocol.vega.api.Trading.OracleSpecRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OracleSpecResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleSpecRequest,
      io.vegaprotocol.vega.api.Trading.OracleSpecResponse> getOracleSpecMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleSpecRequest, io.vegaprotocol.vega.api.Trading.OracleSpecResponse> getOracleSpecMethod;
    if ((getOracleSpecMethod = TradingDataServiceGrpc.getOracleSpecMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOracleSpecMethod = TradingDataServiceGrpc.getOracleSpecMethod) == null) {
          TradingDataServiceGrpc.getOracleSpecMethod = getOracleSpecMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OracleSpecRequest, io.vegaprotocol.vega.api.Trading.OracleSpecResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OracleSpec"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OracleSpecRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OracleSpecResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OracleSpec"))
              .build();
        }
      }
    }
    return getOracleSpecMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleSpecsRequest,
      io.vegaprotocol.vega.api.Trading.OracleSpecsResponse> getOracleSpecsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OracleSpecs",
      requestType = io.vegaprotocol.vega.api.Trading.OracleSpecsRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OracleSpecsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleSpecsRequest,
      io.vegaprotocol.vega.api.Trading.OracleSpecsResponse> getOracleSpecsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleSpecsRequest, io.vegaprotocol.vega.api.Trading.OracleSpecsResponse> getOracleSpecsMethod;
    if ((getOracleSpecsMethod = TradingDataServiceGrpc.getOracleSpecsMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOracleSpecsMethod = TradingDataServiceGrpc.getOracleSpecsMethod) == null) {
          TradingDataServiceGrpc.getOracleSpecsMethod = getOracleSpecsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OracleSpecsRequest, io.vegaprotocol.vega.api.Trading.OracleSpecsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OracleSpecs"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OracleSpecsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OracleSpecsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OracleSpecs"))
              .build();
        }
      }
    }
    return getOracleSpecsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest,
      io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse> getOracleDataBySpecMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "OracleDataBySpec",
      requestType = io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest,
      io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse> getOracleDataBySpecMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest, io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse> getOracleDataBySpecMethod;
    if ((getOracleDataBySpecMethod = TradingDataServiceGrpc.getOracleDataBySpecMethod) == null) {
      synchronized (TradingDataServiceGrpc.class) {
        if ((getOracleDataBySpecMethod = TradingDataServiceGrpc.getOracleDataBySpecMethod) == null) {
          TradingDataServiceGrpc.getOracleDataBySpecMethod = getOracleDataBySpecMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest, io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "OracleDataBySpec"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingDataServiceMethodDescriptorSupplier("OracleDataBySpec"))
              .build();
        }
      }
    }
    return getOracleDataBySpecMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TradingDataServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradingDataServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradingDataServiceStub>() {
        @java.lang.Override
        public TradingDataServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradingDataServiceStub(channel, callOptions);
        }
      };
    return TradingDataServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TradingDataServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradingDataServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradingDataServiceBlockingStub>() {
        @java.lang.Override
        public TradingDataServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradingDataServiceBlockingStub(channel, callOptions);
        }
      };
    return TradingDataServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TradingDataServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradingDataServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradingDataServiceFutureStub>() {
        @java.lang.Override
        public TradingDataServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradingDataServiceFutureStub(channel, callOptions);
        }
      };
    return TradingDataServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class TradingDataServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Get a list of Accounts by Market
     * </pre>
     */
    public void marketAccounts(io.vegaprotocol.vega.api.Trading.MarketAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketAccountsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketAccountsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Accounts by Party
     * </pre>
     */
    public void partyAccounts(io.vegaprotocol.vega.api.Trading.PartyAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartyAccountsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPartyAccountsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of accounts holding infrastructure fees.
     * Can be filtered by asset, there will be 1 infrastructure fee account per
     * asset in the network.
     * </pre>
     */
    public void feeInfrastructureAccounts(io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getFeeInfrastructureAccountsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Candles by Market
     * </pre>
     */
    public void candles(io.vegaprotocol.vega.api.Trading.CandlesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.CandlesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCandlesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Market Data by Market ID
     * </pre>
     */
    public void marketDataByID(io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketDataByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Market Data
     * </pre>
     */
    public void marketsData(io.vegaprotocol.vega.api.Trading.MarketsDataRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsDataResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketsDataMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a Market by ID
     * </pre>
     */
    public void marketByID(io.vegaprotocol.vega.api.Trading.MarketByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Market Depth
     * </pre>
     */
    public void marketDepth(io.vegaprotocol.vega.api.Trading.MarketDepthRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketDepthMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Markets
     * </pre>
     */
    public void markets(io.vegaprotocol.vega.api.Trading.MarketsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an Order by Market and Order ID
     * </pre>
     */
    public void orderByMarketAndID(io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrderByMarketAndIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an Order by Pending Order reference (UUID)
     * </pre>
     */
    public void orderByReference(io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrderByReferenceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Orders by Market
     * </pre>
     */
    public void ordersByMarket(io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrdersByMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Orders by Party
     * </pre>
     */
    public void ordersByParty(io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrdersByPartyMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a specific order by order ID
     * </pre>
     */
    public void orderByID(io.vegaprotocol.vega.api.Trading.OrderByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrderByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get all versions of the order by its orderID
     * </pre>
     */
    public void orderVersionsByID(io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrderVersionsByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Margin Levels by Party ID
     * </pre>
     */
    public void marginLevels(io.vegaprotocol.vega.api.Trading.MarginLevelsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarginLevelsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarginLevelsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Parties
     * </pre>
     */
    public void parties(io.vegaprotocol.vega.api.Trading.PartiesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartiesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPartiesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a Party by ID
     * </pre>
     */
    public void partyByID(io.vegaprotocol.vega.api.Trading.PartyByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartyByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPartyByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Positions by Party
     * </pre>
     */
    public void positionsByParty(io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPositionsByPartyMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get latest Trade
     * </pre>
     */
    public void lastTrade(io.vegaprotocol.vega.api.Trading.LastTradeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LastTradeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLastTradeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Trades by Market
     * </pre>
     */
    public void tradesByMarket(io.vegaprotocol.vega.api.Trading.TradesByMarketRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByMarketResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradesByMarketMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Trades by Order
     * </pre>
     */
    public void tradesByOrder(io.vegaprotocol.vega.api.Trading.TradesByOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByOrderResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradesByOrderMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of Trades by Party
     * </pre>
     */
    public void tradesByParty(io.vegaprotocol.vega.api.Trading.TradesByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByPartyResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradesByPartyMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for all proposals
     * </pre>
     */
    public void getProposals(io.vegaprotocol.vega.api.Trading.GetProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProposalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals by party authoring them
     * </pre>
     */
    public void getProposalsByParty(io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProposalsByPartyMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get votes by party casting them
     * </pre>
     */
    public void getVotesByParty(io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetVotesByPartyMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim creating new markets
     * </pre>
     */
    public void getNewMarketProposals(io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetNewMarketProposalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating markets
     * </pre>
     */
    public void getUpdateMarketProposals(io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetUpdateMarketProposalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating Vega network parameters
     * </pre>
     */
    public void getNetworkParametersProposals(io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetNetworkParametersProposalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals aiming to create new assets
     * </pre>
     */
    public void getNewAssetProposals(io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetNewAssetProposalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by ID
     * </pre>
     */
    public void getProposalByID(io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProposalByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by reference
     * </pre>
     */
    public void getProposalByReference(io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetProposalByReferenceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of all governance updates
     * </pre>
     */
    public void observeGovernance(io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getObserveGovernanceMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of proposal updates
     * </pre>
     */
    public void observePartyProposals(io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getObservePartyProposalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of votes cast by a specific party
     * </pre>
     */
    public void observePartyVotes(io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getObservePartyVotesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of proposal votes
     * </pre>
     */
    public void observeProposalVotes(io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getObserveProposalVotesMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of events from the core
     * </pre>
     */
    public io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest> observeEventBus(
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> responseObserver) {
      return io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall(getObserveEventBusMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Statistics on Vega
     * </pre>
     */
    public void statistics(io.vegaprotocol.vega.api.Trading.StatisticsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.StatisticsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getStatisticsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get Time
     * </pre>
     */
    public void getVegaTime(io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetVegaTimeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Accounts
     * </pre>
     */
    public void accountsSubscribe(io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAccountsSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Candles
     * </pre>
     */
    public void candlesSubscribe(io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCandlesSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Margin Levels
     * </pre>
     */
    public void marginLevelsSubscribe(io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarginLevelsSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Market Depth
     * </pre>
     */
    public void marketDepthSubscribe(io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketDepthSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Market Depth Price Level Updates
     * </pre>
     */
    public void marketDepthUpdatesSubscribe(io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketDepthUpdatesSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Markets Data
     * </pre>
     */
    public void marketsDataSubscribe(io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getMarketsDataSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Orders
     * </pre>
     */
    public void ordersSubscribe(io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOrdersSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Positions
     * </pre>
     */
    public void positionsSubscribe(io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPositionsSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Trades
     * </pre>
     */
    public void tradesSubscribe(io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTradesSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Transfer Responses
     * </pre>
     */
    public void transferResponsesSubscribe(io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTransferResponsesSubscribeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an aggregate of signatures from all the nodes of the network
     * </pre>
     */
    public void getNodeSignaturesAggregate(io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getGetNodeSignaturesAggregateMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an asset by its identifier
     * </pre>
     */
    public void assetByID(io.vegaprotocol.vega.api.Trading.AssetByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AssetByIDResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAssetByIDMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a list of all assets on Vega
     * </pre>
     */
    public void assets(io.vegaprotocol.vega.api.Trading.AssetsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AssetsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getAssetsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an estimate for the fee to be paid for a given order
     * </pre>
     */
    public void estimateFee(io.vegaprotocol.vega.api.Trading.EstimateFeeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.EstimateFeeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getEstimateFeeMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an estimate for the margin required for a new order
     * </pre>
     */
    public void estimateMargin(io.vegaprotocol.vega.api.Trading.EstimateMarginRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.EstimateMarginResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getEstimateMarginMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get the bundle approval for an ERC20 withdrawal,
     * these data are being used to bundle the call to the smart contract on the ethereum bridge
     * </pre>
     */
    public void eRC20WithdrawalApproval(io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getERC20WithdrawalApprovalMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a withdrawal by its identifier
     * </pre>
     */
    public void withdrawal(io.vegaprotocol.vega.api.Trading.WithdrawalRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.WithdrawalResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getWithdrawalMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get withdrawals for a party
     * </pre>
     */
    public void withdrawals(io.vegaprotocol.vega.api.Trading.WithdrawalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.WithdrawalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getWithdrawalsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get a deposit by its identifier
     * </pre>
     */
    public void deposit(io.vegaprotocol.vega.api.Trading.DepositRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.DepositResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDepositMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get deposits for a party
     * </pre>
     */
    public void deposits(io.vegaprotocol.vega.api.Trading.DepositsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.DepositsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getDepositsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get the network parameters
     * </pre>
     */
    public void networkParameters(io.vegaprotocol.vega.api.Trading.NetworkParametersRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.NetworkParametersResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getNetworkParametersMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get the liquidity provision orders
     * </pre>
     */
    public void liquidityProvisions(io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLiquidityProvisionsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get an oracle spec by ID
     * </pre>
     */
    public void oracleSpec(io.vegaprotocol.vega.api.Trading.OracleSpecRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleSpecResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOracleSpecMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get the oracle specs
     * </pre>
     */
    public void oracleSpecs(io.vegaprotocol.vega.api.Trading.OracleSpecsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleSpecsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOracleSpecsMethod(), responseObserver);
    }

    /**
     * <pre>
     * Get all oracle data
     * </pre>
     */
    public void oracleDataBySpec(io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getOracleDataBySpecMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getMarketAccountsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketAccountsRequest,
                io.vegaprotocol.vega.api.Trading.MarketAccountsResponse>(
                  this, METHODID_MARKET_ACCOUNTS)))
          .addMethod(
            getPartyAccountsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PartyAccountsRequest,
                io.vegaprotocol.vega.api.Trading.PartyAccountsResponse>(
                  this, METHODID_PARTY_ACCOUNTS)))
          .addMethod(
            getFeeInfrastructureAccountsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest,
                io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse>(
                  this, METHODID_FEE_INFRASTRUCTURE_ACCOUNTS)))
          .addMethod(
            getCandlesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.CandlesRequest,
                io.vegaprotocol.vega.api.Trading.CandlesResponse>(
                  this, METHODID_CANDLES)))
          .addMethod(
            getMarketDataByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest,
                io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse>(
                  this, METHODID_MARKET_DATA_BY_ID)))
          .addMethod(
            getMarketsDataMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketsDataRequest,
                io.vegaprotocol.vega.api.Trading.MarketsDataResponse>(
                  this, METHODID_MARKETS_DATA)))
          .addMethod(
            getMarketByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketByIDRequest,
                io.vegaprotocol.vega.api.Trading.MarketByIDResponse>(
                  this, METHODID_MARKET_BY_ID)))
          .addMethod(
            getMarketDepthMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketDepthRequest,
                io.vegaprotocol.vega.api.Trading.MarketDepthResponse>(
                  this, METHODID_MARKET_DEPTH)))
          .addMethod(
            getMarketsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketsRequest,
                io.vegaprotocol.vega.api.Trading.MarketsResponse>(
                  this, METHODID_MARKETS)))
          .addMethod(
            getOrderByMarketAndIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest,
                io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse>(
                  this, METHODID_ORDER_BY_MARKET_AND_ID)))
          .addMethod(
            getOrderByReferenceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest,
                io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse>(
                  this, METHODID_ORDER_BY_REFERENCE)))
          .addMethod(
            getOrdersByMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest,
                io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse>(
                  this, METHODID_ORDERS_BY_MARKET)))
          .addMethod(
            getOrdersByPartyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest,
                io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse>(
                  this, METHODID_ORDERS_BY_PARTY)))
          .addMethod(
            getOrderByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrderByIDRequest,
                io.vegaprotocol.vega.api.Trading.OrderByIDResponse>(
                  this, METHODID_ORDER_BY_ID)))
          .addMethod(
            getOrderVersionsByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest,
                io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse>(
                  this, METHODID_ORDER_VERSIONS_BY_ID)))
          .addMethod(
            getMarginLevelsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarginLevelsRequest,
                io.vegaprotocol.vega.api.Trading.MarginLevelsResponse>(
                  this, METHODID_MARGIN_LEVELS)))
          .addMethod(
            getPartiesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PartiesRequest,
                io.vegaprotocol.vega.api.Trading.PartiesResponse>(
                  this, METHODID_PARTIES)))
          .addMethod(
            getPartyByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PartyByIDRequest,
                io.vegaprotocol.vega.api.Trading.PartyByIDResponse>(
                  this, METHODID_PARTY_BY_ID)))
          .addMethod(
            getPositionsByPartyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest,
                io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse>(
                  this, METHODID_POSITIONS_BY_PARTY)))
          .addMethod(
            getLastTradeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.LastTradeRequest,
                io.vegaprotocol.vega.api.Trading.LastTradeResponse>(
                  this, METHODID_LAST_TRADE)))
          .addMethod(
            getTradesByMarketMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.TradesByMarketRequest,
                io.vegaprotocol.vega.api.Trading.TradesByMarketResponse>(
                  this, METHODID_TRADES_BY_MARKET)))
          .addMethod(
            getTradesByOrderMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.TradesByOrderRequest,
                io.vegaprotocol.vega.api.Trading.TradesByOrderResponse>(
                  this, METHODID_TRADES_BY_ORDER)))
          .addMethod(
            getTradesByPartyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.TradesByPartyRequest,
                io.vegaprotocol.vega.api.Trading.TradesByPartyResponse>(
                  this, METHODID_TRADES_BY_PARTY)))
          .addMethod(
            getGetProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetProposalsRequest,
                io.vegaprotocol.vega.api.Trading.GetProposalsResponse>(
                  this, METHODID_GET_PROPOSALS)))
          .addMethod(
            getGetProposalsByPartyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest,
                io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse>(
                  this, METHODID_GET_PROPOSALS_BY_PARTY)))
          .addMethod(
            getGetVotesByPartyMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest,
                io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse>(
                  this, METHODID_GET_VOTES_BY_PARTY)))
          .addMethod(
            getGetNewMarketProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest,
                io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse>(
                  this, METHODID_GET_NEW_MARKET_PROPOSALS)))
          .addMethod(
            getGetUpdateMarketProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest,
                io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse>(
                  this, METHODID_GET_UPDATE_MARKET_PROPOSALS)))
          .addMethod(
            getGetNetworkParametersProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest,
                io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse>(
                  this, METHODID_GET_NETWORK_PARAMETERS_PROPOSALS)))
          .addMethod(
            getGetNewAssetProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest,
                io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse>(
                  this, METHODID_GET_NEW_ASSET_PROPOSALS)))
          .addMethod(
            getGetProposalByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest,
                io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse>(
                  this, METHODID_GET_PROPOSAL_BY_ID)))
          .addMethod(
            getGetProposalByReferenceMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest,
                io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse>(
                  this, METHODID_GET_PROPOSAL_BY_REFERENCE)))
          .addMethod(
            getObserveGovernanceMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest,
                io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse>(
                  this, METHODID_OBSERVE_GOVERNANCE)))
          .addMethod(
            getObservePartyProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest,
                io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse>(
                  this, METHODID_OBSERVE_PARTY_PROPOSALS)))
          .addMethod(
            getObservePartyVotesMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest,
                io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse>(
                  this, METHODID_OBSERVE_PARTY_VOTES)))
          .addMethod(
            getObserveProposalVotesMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest,
                io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse>(
                  this, METHODID_OBSERVE_PROPOSAL_VOTES)))
          .addMethod(
            getObserveEventBusMethod(),
            io.grpc.stub.ServerCalls.asyncBidiStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest,
                io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse>(
                  this, METHODID_OBSERVE_EVENT_BUS)))
          .addMethod(
            getStatisticsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.StatisticsRequest,
                io.vegaprotocol.vega.api.Trading.StatisticsResponse>(
                  this, METHODID_STATISTICS)))
          .addMethod(
            getGetVegaTimeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest,
                io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse>(
                  this, METHODID_GET_VEGA_TIME)))
          .addMethod(
            getAccountsSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse>(
                  this, METHODID_ACCOUNTS_SUBSCRIBE)))
          .addMethod(
            getCandlesSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse>(
                  this, METHODID_CANDLES_SUBSCRIBE)))
          .addMethod(
            getMarginLevelsSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse>(
                  this, METHODID_MARGIN_LEVELS_SUBSCRIBE)))
          .addMethod(
            getMarketDepthSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse>(
                  this, METHODID_MARKET_DEPTH_SUBSCRIBE)))
          .addMethod(
            getMarketDepthUpdatesSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse>(
                  this, METHODID_MARKET_DEPTH_UPDATES_SUBSCRIBE)))
          .addMethod(
            getMarketsDataSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse>(
                  this, METHODID_MARKETS_DATA_SUBSCRIBE)))
          .addMethod(
            getOrdersSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse>(
                  this, METHODID_ORDERS_SUBSCRIBE)))
          .addMethod(
            getPositionsSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse>(
                  this, METHODID_POSITIONS_SUBSCRIBE)))
          .addMethod(
            getTradesSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse>(
                  this, METHODID_TRADES_SUBSCRIBE)))
          .addMethod(
            getTransferResponsesSubscribeMethod(),
            io.grpc.stub.ServerCalls.asyncServerStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest,
                io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse>(
                  this, METHODID_TRANSFER_RESPONSES_SUBSCRIBE)))
          .addMethod(
            getGetNodeSignaturesAggregateMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest,
                io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse>(
                  this, METHODID_GET_NODE_SIGNATURES_AGGREGATE)))
          .addMethod(
            getAssetByIDMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.AssetByIDRequest,
                io.vegaprotocol.vega.api.Trading.AssetByIDResponse>(
                  this, METHODID_ASSET_BY_ID)))
          .addMethod(
            getAssetsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.AssetsRequest,
                io.vegaprotocol.vega.api.Trading.AssetsResponse>(
                  this, METHODID_ASSETS)))
          .addMethod(
            getEstimateFeeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.EstimateFeeRequest,
                io.vegaprotocol.vega.api.Trading.EstimateFeeResponse>(
                  this, METHODID_ESTIMATE_FEE)))
          .addMethod(
            getEstimateMarginMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.EstimateMarginRequest,
                io.vegaprotocol.vega.api.Trading.EstimateMarginResponse>(
                  this, METHODID_ESTIMATE_MARGIN)))
          .addMethod(
            getERC20WithdrawalApprovalMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest,
                io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse>(
                  this, METHODID_ERC20WITHDRAWAL_APPROVAL)))
          .addMethod(
            getWithdrawalMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.WithdrawalRequest,
                io.vegaprotocol.vega.api.Trading.WithdrawalResponse>(
                  this, METHODID_WITHDRAWAL)))
          .addMethod(
            getWithdrawalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.WithdrawalsRequest,
                io.vegaprotocol.vega.api.Trading.WithdrawalsResponse>(
                  this, METHODID_WITHDRAWALS)))
          .addMethod(
            getDepositMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.DepositRequest,
                io.vegaprotocol.vega.api.Trading.DepositResponse>(
                  this, METHODID_DEPOSIT)))
          .addMethod(
            getDepositsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.DepositsRequest,
                io.vegaprotocol.vega.api.Trading.DepositsResponse>(
                  this, METHODID_DEPOSITS)))
          .addMethod(
            getNetworkParametersMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.NetworkParametersRequest,
                io.vegaprotocol.vega.api.Trading.NetworkParametersResponse>(
                  this, METHODID_NETWORK_PARAMETERS)))
          .addMethod(
            getLiquidityProvisionsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest,
                io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse>(
                  this, METHODID_LIQUIDITY_PROVISIONS)))
          .addMethod(
            getOracleSpecMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OracleSpecRequest,
                io.vegaprotocol.vega.api.Trading.OracleSpecResponse>(
                  this, METHODID_ORACLE_SPEC)))
          .addMethod(
            getOracleSpecsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OracleSpecsRequest,
                io.vegaprotocol.vega.api.Trading.OracleSpecsResponse>(
                  this, METHODID_ORACLE_SPECS)))
          .addMethod(
            getOracleDataBySpecMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest,
                io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse>(
                  this, METHODID_ORACLE_DATA_BY_SPEC)))
          .build();
    }
  }

  /**
   */
  public static final class TradingDataServiceStub extends io.grpc.stub.AbstractAsyncStub<TradingDataServiceStub> {
    private TradingDataServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradingDataServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradingDataServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get a list of Accounts by Market
     * </pre>
     */
    public void marketAccounts(io.vegaprotocol.vega.api.Trading.MarketAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketAccountsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketAccountsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Accounts by Party
     * </pre>
     */
    public void partyAccounts(io.vegaprotocol.vega.api.Trading.PartyAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartyAccountsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPartyAccountsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of accounts holding infrastructure fees.
     * Can be filtered by asset, there will be 1 infrastructure fee account per
     * asset in the network.
     * </pre>
     */
    public void feeInfrastructureAccounts(io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getFeeInfrastructureAccountsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Candles by Market
     * </pre>
     */
    public void candles(io.vegaprotocol.vega.api.Trading.CandlesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.CandlesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCandlesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Market Data by Market ID
     * </pre>
     */
    public void marketDataByID(io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketDataByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Market Data
     * </pre>
     */
    public void marketsData(io.vegaprotocol.vega.api.Trading.MarketsDataRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsDataResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketsDataMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a Market by ID
     * </pre>
     */
    public void marketByID(io.vegaprotocol.vega.api.Trading.MarketByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Market Depth
     * </pre>
     */
    public void marketDepth(io.vegaprotocol.vega.api.Trading.MarketDepthRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketDepthMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Markets
     * </pre>
     */
    public void markets(io.vegaprotocol.vega.api.Trading.MarketsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarketsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an Order by Market and Order ID
     * </pre>
     */
    public void orderByMarketAndID(io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOrderByMarketAndIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an Order by Pending Order reference (UUID)
     * </pre>
     */
    public void orderByReference(io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOrderByReferenceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Orders by Market
     * </pre>
     */
    public void ordersByMarket(io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOrdersByMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Orders by Party
     * </pre>
     */
    public void ordersByParty(io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOrdersByPartyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a specific order by order ID
     * </pre>
     */
    public void orderByID(io.vegaprotocol.vega.api.Trading.OrderByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOrderByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get all versions of the order by its orderID
     * </pre>
     */
    public void orderVersionsByID(io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOrderVersionsByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Margin Levels by Party ID
     * </pre>
     */
    public void marginLevels(io.vegaprotocol.vega.api.Trading.MarginLevelsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarginLevelsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getMarginLevelsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Parties
     * </pre>
     */
    public void parties(io.vegaprotocol.vega.api.Trading.PartiesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartiesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPartiesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a Party by ID
     * </pre>
     */
    public void partyByID(io.vegaprotocol.vega.api.Trading.PartyByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartyByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPartyByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Positions by Party
     * </pre>
     */
    public void positionsByParty(io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPositionsByPartyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get latest Trade
     * </pre>
     */
    public void lastTrade(io.vegaprotocol.vega.api.Trading.LastTradeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LastTradeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLastTradeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Trades by Market
     * </pre>
     */
    public void tradesByMarket(io.vegaprotocol.vega.api.Trading.TradesByMarketRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByMarketResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTradesByMarketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Trades by Order
     * </pre>
     */
    public void tradesByOrder(io.vegaprotocol.vega.api.Trading.TradesByOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByOrderResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTradesByOrderMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of Trades by Party
     * </pre>
     */
    public void tradesByParty(io.vegaprotocol.vega.api.Trading.TradesByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByPartyResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTradesByPartyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for all proposals
     * </pre>
     */
    public void getProposals(io.vegaprotocol.vega.api.Trading.GetProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProposalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals by party authoring them
     * </pre>
     */
    public void getProposalsByParty(io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProposalsByPartyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get votes by party casting them
     * </pre>
     */
    public void getVotesByParty(io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetVotesByPartyMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim creating new markets
     * </pre>
     */
    public void getNewMarketProposals(io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetNewMarketProposalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating markets
     * </pre>
     */
    public void getUpdateMarketProposals(io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetUpdateMarketProposalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating Vega network parameters
     * </pre>
     */
    public void getNetworkParametersProposals(io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetNetworkParametersProposalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals aiming to create new assets
     * </pre>
     */
    public void getNewAssetProposals(io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetNewAssetProposalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by ID
     * </pre>
     */
    public void getProposalByID(io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProposalByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by reference
     * </pre>
     */
    public void getProposalByReference(io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetProposalByReferenceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of all governance updates
     * </pre>
     */
    public void observeGovernance(io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getObserveGovernanceMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of proposal updates
     * </pre>
     */
    public void observePartyProposals(io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getObservePartyProposalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of votes cast by a specific party
     * </pre>
     */
    public void observePartyVotes(io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getObservePartyVotesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of proposal votes
     * </pre>
     */
    public void observeProposalVotes(io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getObserveProposalVotesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of events from the core
     * </pre>
     */
    public io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest> observeEventBus(
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> responseObserver) {
      return io.grpc.stub.ClientCalls.asyncBidiStreamingCall(
          getChannel().newCall(getObserveEventBusMethod(), getCallOptions()), responseObserver);
    }

    /**
     * <pre>
     * Get Statistics on Vega
     * </pre>
     */
    public void statistics(io.vegaprotocol.vega.api.Trading.StatisticsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.StatisticsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getStatisticsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get Time
     * </pre>
     */
    public void getVegaTime(io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetVegaTimeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Accounts
     * </pre>
     */
    public void accountsSubscribe(io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getAccountsSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Candles
     * </pre>
     */
    public void candlesSubscribe(io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getCandlesSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Margin Levels
     * </pre>
     */
    public void marginLevelsSubscribe(io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getMarginLevelsSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Market Depth
     * </pre>
     */
    public void marketDepthSubscribe(io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getMarketDepthSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Market Depth Price Level Updates
     * </pre>
     */
    public void marketDepthUpdatesSubscribe(io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getMarketDepthUpdatesSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Markets Data
     * </pre>
     */
    public void marketsDataSubscribe(io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getMarketsDataSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Orders
     * </pre>
     */
    public void ordersSubscribe(io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getOrdersSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Positions
     * </pre>
     */
    public void positionsSubscribe(io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getPositionsSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Trades
     * </pre>
     */
    public void tradesSubscribe(io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getTradesSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Subscribe to a stream of Transfer Responses
     * </pre>
     */
    public void transferResponsesSubscribe(io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncServerStreamingCall(
          getChannel().newCall(getTransferResponsesSubscribeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an aggregate of signatures from all the nodes of the network
     * </pre>
     */
    public void getNodeSignaturesAggregate(io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getGetNodeSignaturesAggregateMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an asset by its identifier
     * </pre>
     */
    public void assetByID(io.vegaprotocol.vega.api.Trading.AssetByIDRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AssetByIDResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAssetByIDMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a list of all assets on Vega
     * </pre>
     */
    public void assets(io.vegaprotocol.vega.api.Trading.AssetsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AssetsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getAssetsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an estimate for the fee to be paid for a given order
     * </pre>
     */
    public void estimateFee(io.vegaprotocol.vega.api.Trading.EstimateFeeRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.EstimateFeeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getEstimateFeeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an estimate for the margin required for a new order
     * </pre>
     */
    public void estimateMargin(io.vegaprotocol.vega.api.Trading.EstimateMarginRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.EstimateMarginResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getEstimateMarginMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get the bundle approval for an ERC20 withdrawal,
     * these data are being used to bundle the call to the smart contract on the ethereum bridge
     * </pre>
     */
    public void eRC20WithdrawalApproval(io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getERC20WithdrawalApprovalMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a withdrawal by its identifier
     * </pre>
     */
    public void withdrawal(io.vegaprotocol.vega.api.Trading.WithdrawalRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.WithdrawalResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getWithdrawalMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get withdrawals for a party
     * </pre>
     */
    public void withdrawals(io.vegaprotocol.vega.api.Trading.WithdrawalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.WithdrawalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getWithdrawalsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get a deposit by its identifier
     * </pre>
     */
    public void deposit(io.vegaprotocol.vega.api.Trading.DepositRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.DepositResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDepositMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get deposits for a party
     * </pre>
     */
    public void deposits(io.vegaprotocol.vega.api.Trading.DepositsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.DepositsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getDepositsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get the network parameters
     * </pre>
     */
    public void networkParameters(io.vegaprotocol.vega.api.Trading.NetworkParametersRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.NetworkParametersResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getNetworkParametersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get the liquidity provision orders
     * </pre>
     */
    public void liquidityProvisions(io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLiquidityProvisionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get an oracle spec by ID
     * </pre>
     */
    public void oracleSpec(io.vegaprotocol.vega.api.Trading.OracleSpecRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleSpecResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOracleSpecMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get the oracle specs
     * </pre>
     */
    public void oracleSpecs(io.vegaprotocol.vega.api.Trading.OracleSpecsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleSpecsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOracleSpecsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Get all oracle data
     * </pre>
     */
    public void oracleDataBySpec(io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getOracleDataBySpecMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class TradingDataServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<TradingDataServiceBlockingStub> {
    private TradingDataServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradingDataServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradingDataServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get a list of Accounts by Market
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarketAccountsResponse marketAccounts(io.vegaprotocol.vega.api.Trading.MarketAccountsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketAccountsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Accounts by Party
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PartyAccountsResponse partyAccounts(io.vegaprotocol.vega.api.Trading.PartyAccountsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPartyAccountsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of accounts holding infrastructure fees.
     * Can be filtered by asset, there will be 1 infrastructure fee account per
     * asset in the network.
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse feeInfrastructureAccounts(io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getFeeInfrastructureAccountsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Candles by Market
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.CandlesResponse candles(io.vegaprotocol.vega.api.Trading.CandlesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCandlesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Market Data by Market ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse marketDataByID(io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketDataByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Market Data
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarketsDataResponse marketsData(io.vegaprotocol.vega.api.Trading.MarketsDataRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketsDataMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a Market by ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarketByIDResponse marketByID(io.vegaprotocol.vega.api.Trading.MarketByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Market Depth
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarketDepthResponse marketDepth(io.vegaprotocol.vega.api.Trading.MarketDepthRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketDepthMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Markets
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarketsResponse markets(io.vegaprotocol.vega.api.Trading.MarketsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarketsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an Order by Market and Order ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse orderByMarketAndID(io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOrderByMarketAndIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an Order by Pending Order reference (UUID)
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse orderByReference(io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOrderByReferenceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Orders by Market
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse ordersByMarket(io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOrdersByMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Orders by Party
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse ordersByParty(io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOrdersByPartyMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a specific order by order ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OrderByIDResponse orderByID(io.vegaprotocol.vega.api.Trading.OrderByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOrderByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get all versions of the order by its orderID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse orderVersionsByID(io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOrderVersionsByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Margin Levels by Party ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.MarginLevelsResponse marginLevels(io.vegaprotocol.vega.api.Trading.MarginLevelsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getMarginLevelsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Parties
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PartiesResponse parties(io.vegaprotocol.vega.api.Trading.PartiesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPartiesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a Party by ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PartyByIDResponse partyByID(io.vegaprotocol.vega.api.Trading.PartyByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPartyByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Positions by Party
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse positionsByParty(io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPositionsByPartyMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get latest Trade
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.LastTradeResponse lastTrade(io.vegaprotocol.vega.api.Trading.LastTradeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLastTradeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Trades by Market
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.TradesByMarketResponse tradesByMarket(io.vegaprotocol.vega.api.Trading.TradesByMarketRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTradesByMarketMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Trades by Order
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.TradesByOrderResponse tradesByOrder(io.vegaprotocol.vega.api.Trading.TradesByOrderRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTradesByOrderMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of Trades by Party
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.TradesByPartyResponse tradesByParty(io.vegaprotocol.vega.api.Trading.TradesByPartyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTradesByPartyMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for all proposals
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetProposalsResponse getProposals(io.vegaprotocol.vega.api.Trading.GetProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProposalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals by party authoring them
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse getProposalsByParty(io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProposalsByPartyMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get votes by party casting them
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse getVotesByParty(io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetVotesByPartyMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim creating new markets
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse getNewMarketProposals(io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetNewMarketProposalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating markets
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse getUpdateMarketProposals(io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetUpdateMarketProposalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating Vega network parameters
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse getNetworkParametersProposals(io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetNetworkParametersProposalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals aiming to create new assets
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse getNewAssetProposals(io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetNewAssetProposalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse getProposalByID(io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProposalByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by reference
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse getProposalByReference(io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetProposalByReferenceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of all governance updates
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse> observeGovernance(
        io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getObserveGovernanceMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of proposal updates
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse> observePartyProposals(
        io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getObservePartyProposalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of votes cast by a specific party
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse> observePartyVotes(
        io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getObservePartyVotesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of proposal votes
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse> observeProposalVotes(
        io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getObserveProposalVotesMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Statistics on Vega
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.StatisticsResponse statistics(io.vegaprotocol.vega.api.Trading.StatisticsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getStatisticsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get Time
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse getVegaTime(io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetVegaTimeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Accounts
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse> accountsSubscribe(
        io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getAccountsSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Candles
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse> candlesSubscribe(
        io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getCandlesSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Margin Levels
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse> marginLevelsSubscribe(
        io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getMarginLevelsSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Market Depth
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse> marketDepthSubscribe(
        io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getMarketDepthSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Market Depth Price Level Updates
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse> marketDepthUpdatesSubscribe(
        io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getMarketDepthUpdatesSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Markets Data
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse> marketsDataSubscribe(
        io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getMarketsDataSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Orders
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse> ordersSubscribe(
        io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getOrdersSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Positions
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse> positionsSubscribe(
        io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getPositionsSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Trades
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse> tradesSubscribe(
        io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getTradesSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Subscribe to a stream of Transfer Responses
     * </pre>
     */
    public java.util.Iterator<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse> transferResponsesSubscribe(
        io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest request) {
      return io.grpc.stub.ClientCalls.blockingServerStreamingCall(
          getChannel(), getTransferResponsesSubscribeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an aggregate of signatures from all the nodes of the network
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse getNodeSignaturesAggregate(io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getGetNodeSignaturesAggregateMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an asset by its identifier
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.AssetByIDResponse assetByID(io.vegaprotocol.vega.api.Trading.AssetByIDRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAssetByIDMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a list of all assets on Vega
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.AssetsResponse assets(io.vegaprotocol.vega.api.Trading.AssetsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getAssetsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an estimate for the fee to be paid for a given order
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.EstimateFeeResponse estimateFee(io.vegaprotocol.vega.api.Trading.EstimateFeeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getEstimateFeeMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an estimate for the margin required for a new order
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.EstimateMarginResponse estimateMargin(io.vegaprotocol.vega.api.Trading.EstimateMarginRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getEstimateMarginMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get the bundle approval for an ERC20 withdrawal,
     * these data are being used to bundle the call to the smart contract on the ethereum bridge
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse eRC20WithdrawalApproval(io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getERC20WithdrawalApprovalMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a withdrawal by its identifier
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.WithdrawalResponse withdrawal(io.vegaprotocol.vega.api.Trading.WithdrawalRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getWithdrawalMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get withdrawals for a party
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.WithdrawalsResponse withdrawals(io.vegaprotocol.vega.api.Trading.WithdrawalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getWithdrawalsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get a deposit by its identifier
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.DepositResponse deposit(io.vegaprotocol.vega.api.Trading.DepositRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDepositMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get deposits for a party
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.DepositsResponse deposits(io.vegaprotocol.vega.api.Trading.DepositsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getDepositsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get the network parameters
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.NetworkParametersResponse networkParameters(io.vegaprotocol.vega.api.Trading.NetworkParametersRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getNetworkParametersMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get the liquidity provision orders
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse liquidityProvisions(io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLiquidityProvisionsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get an oracle spec by ID
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OracleSpecResponse oracleSpec(io.vegaprotocol.vega.api.Trading.OracleSpecRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOracleSpecMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get the oracle specs
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OracleSpecsResponse oracleSpecs(io.vegaprotocol.vega.api.Trading.OracleSpecsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOracleSpecsMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Get all oracle data
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse oracleDataBySpec(io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getOracleDataBySpecMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class TradingDataServiceFutureStub extends io.grpc.stub.AbstractFutureStub<TradingDataServiceFutureStub> {
    private TradingDataServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradingDataServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradingDataServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Get a list of Accounts by Market
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarketAccountsResponse> marketAccounts(
        io.vegaprotocol.vega.api.Trading.MarketAccountsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketAccountsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Accounts by Party
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PartyAccountsResponse> partyAccounts(
        io.vegaprotocol.vega.api.Trading.PartyAccountsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPartyAccountsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of accounts holding infrastructure fees.
     * Can be filtered by asset, there will be 1 infrastructure fee account per
     * asset in the network.
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse> feeInfrastructureAccounts(
        io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getFeeInfrastructureAccountsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Candles by Market
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.CandlesResponse> candles(
        io.vegaprotocol.vega.api.Trading.CandlesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCandlesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Market Data by Market ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse> marketDataByID(
        io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketDataByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Market Data
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarketsDataResponse> marketsData(
        io.vegaprotocol.vega.api.Trading.MarketsDataRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketsDataMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a Market by ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarketByIDResponse> marketByID(
        io.vegaprotocol.vega.api.Trading.MarketByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Market Depth
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarketDepthResponse> marketDepth(
        io.vegaprotocol.vega.api.Trading.MarketDepthRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketDepthMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Markets
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarketsResponse> markets(
        io.vegaprotocol.vega.api.Trading.MarketsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarketsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an Order by Market and Order ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse> orderByMarketAndID(
        io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOrderByMarketAndIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an Order by Pending Order reference (UUID)
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse> orderByReference(
        io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOrderByReferenceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Orders by Market
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse> ordersByMarket(
        io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOrdersByMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Orders by Party
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse> ordersByParty(
        io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOrdersByPartyMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a specific order by order ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OrderByIDResponse> orderByID(
        io.vegaprotocol.vega.api.Trading.OrderByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOrderByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get all versions of the order by its orderID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse> orderVersionsByID(
        io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOrderVersionsByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Margin Levels by Party ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.MarginLevelsResponse> marginLevels(
        io.vegaprotocol.vega.api.Trading.MarginLevelsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getMarginLevelsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Parties
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PartiesResponse> parties(
        io.vegaprotocol.vega.api.Trading.PartiesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPartiesMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a Party by ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PartyByIDResponse> partyByID(
        io.vegaprotocol.vega.api.Trading.PartyByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPartyByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Positions by Party
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse> positionsByParty(
        io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPositionsByPartyMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get latest Trade
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.LastTradeResponse> lastTrade(
        io.vegaprotocol.vega.api.Trading.LastTradeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLastTradeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Trades by Market
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.TradesByMarketResponse> tradesByMarket(
        io.vegaprotocol.vega.api.Trading.TradesByMarketRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTradesByMarketMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Trades by Order
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.TradesByOrderResponse> tradesByOrder(
        io.vegaprotocol.vega.api.Trading.TradesByOrderRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTradesByOrderMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of Trades by Party
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.TradesByPartyResponse> tradesByParty(
        io.vegaprotocol.vega.api.Trading.TradesByPartyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTradesByPartyMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for all proposals
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetProposalsResponse> getProposals(
        io.vegaprotocol.vega.api.Trading.GetProposalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProposalsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals by party authoring them
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse> getProposalsByParty(
        io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProposalsByPartyMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get votes by party casting them
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse> getVotesByParty(
        io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetVotesByPartyMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim creating new markets
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse> getNewMarketProposals(
        io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetNewMarketProposalsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating markets
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse> getUpdateMarketProposals(
        io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetUpdateMarketProposalsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals that aim updating Vega network parameters
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse> getNetworkParametersProposals(
        io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetNetworkParametersProposalsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for proposals aiming to create new assets
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse> getNewAssetProposals(
        io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetNewAssetProposalsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse> getProposalByID(
        io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProposalByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get governance data (proposals and votes) for a proposal located by reference
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse> getProposalByReference(
        io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetProposalByReferenceMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Statistics on Vega
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.StatisticsResponse> statistics(
        io.vegaprotocol.vega.api.Trading.StatisticsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getStatisticsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get Time
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse> getVegaTime(
        io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetVegaTimeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an aggregate of signatures from all the nodes of the network
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse> getNodeSignaturesAggregate(
        io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getGetNodeSignaturesAggregateMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an asset by its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.AssetByIDResponse> assetByID(
        io.vegaprotocol.vega.api.Trading.AssetByIDRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAssetByIDMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a list of all assets on Vega
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.AssetsResponse> assets(
        io.vegaprotocol.vega.api.Trading.AssetsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getAssetsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an estimate for the fee to be paid for a given order
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.EstimateFeeResponse> estimateFee(
        io.vegaprotocol.vega.api.Trading.EstimateFeeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getEstimateFeeMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an estimate for the margin required for a new order
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.EstimateMarginResponse> estimateMargin(
        io.vegaprotocol.vega.api.Trading.EstimateMarginRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getEstimateMarginMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get the bundle approval for an ERC20 withdrawal,
     * these data are being used to bundle the call to the smart contract on the ethereum bridge
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse> eRC20WithdrawalApproval(
        io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getERC20WithdrawalApprovalMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a withdrawal by its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.WithdrawalResponse> withdrawal(
        io.vegaprotocol.vega.api.Trading.WithdrawalRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getWithdrawalMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get withdrawals for a party
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.WithdrawalsResponse> withdrawals(
        io.vegaprotocol.vega.api.Trading.WithdrawalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getWithdrawalsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get a deposit by its identifier
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.DepositResponse> deposit(
        io.vegaprotocol.vega.api.Trading.DepositRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDepositMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get deposits for a party
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.DepositsResponse> deposits(
        io.vegaprotocol.vega.api.Trading.DepositsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getDepositsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get the network parameters
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.NetworkParametersResponse> networkParameters(
        io.vegaprotocol.vega.api.Trading.NetworkParametersRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getNetworkParametersMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get the liquidity provision orders
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse> liquidityProvisions(
        io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLiquidityProvisionsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get an oracle spec by ID
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OracleSpecResponse> oracleSpec(
        io.vegaprotocol.vega.api.Trading.OracleSpecRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOracleSpecMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get the oracle specs
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OracleSpecsResponse> oracleSpecs(
        io.vegaprotocol.vega.api.Trading.OracleSpecsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOracleSpecsMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Get all oracle data
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse> oracleDataBySpec(
        io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getOracleDataBySpecMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_MARKET_ACCOUNTS = 0;
  private static final int METHODID_PARTY_ACCOUNTS = 1;
  private static final int METHODID_FEE_INFRASTRUCTURE_ACCOUNTS = 2;
  private static final int METHODID_CANDLES = 3;
  private static final int METHODID_MARKET_DATA_BY_ID = 4;
  private static final int METHODID_MARKETS_DATA = 5;
  private static final int METHODID_MARKET_BY_ID = 6;
  private static final int METHODID_MARKET_DEPTH = 7;
  private static final int METHODID_MARKETS = 8;
  private static final int METHODID_ORDER_BY_MARKET_AND_ID = 9;
  private static final int METHODID_ORDER_BY_REFERENCE = 10;
  private static final int METHODID_ORDERS_BY_MARKET = 11;
  private static final int METHODID_ORDERS_BY_PARTY = 12;
  private static final int METHODID_ORDER_BY_ID = 13;
  private static final int METHODID_ORDER_VERSIONS_BY_ID = 14;
  private static final int METHODID_MARGIN_LEVELS = 15;
  private static final int METHODID_PARTIES = 16;
  private static final int METHODID_PARTY_BY_ID = 17;
  private static final int METHODID_POSITIONS_BY_PARTY = 18;
  private static final int METHODID_LAST_TRADE = 19;
  private static final int METHODID_TRADES_BY_MARKET = 20;
  private static final int METHODID_TRADES_BY_ORDER = 21;
  private static final int METHODID_TRADES_BY_PARTY = 22;
  private static final int METHODID_GET_PROPOSALS = 23;
  private static final int METHODID_GET_PROPOSALS_BY_PARTY = 24;
  private static final int METHODID_GET_VOTES_BY_PARTY = 25;
  private static final int METHODID_GET_NEW_MARKET_PROPOSALS = 26;
  private static final int METHODID_GET_UPDATE_MARKET_PROPOSALS = 27;
  private static final int METHODID_GET_NETWORK_PARAMETERS_PROPOSALS = 28;
  private static final int METHODID_GET_NEW_ASSET_PROPOSALS = 29;
  private static final int METHODID_GET_PROPOSAL_BY_ID = 30;
  private static final int METHODID_GET_PROPOSAL_BY_REFERENCE = 31;
  private static final int METHODID_OBSERVE_GOVERNANCE = 32;
  private static final int METHODID_OBSERVE_PARTY_PROPOSALS = 33;
  private static final int METHODID_OBSERVE_PARTY_VOTES = 34;
  private static final int METHODID_OBSERVE_PROPOSAL_VOTES = 35;
  private static final int METHODID_STATISTICS = 36;
  private static final int METHODID_GET_VEGA_TIME = 37;
  private static final int METHODID_ACCOUNTS_SUBSCRIBE = 38;
  private static final int METHODID_CANDLES_SUBSCRIBE = 39;
  private static final int METHODID_MARGIN_LEVELS_SUBSCRIBE = 40;
  private static final int METHODID_MARKET_DEPTH_SUBSCRIBE = 41;
  private static final int METHODID_MARKET_DEPTH_UPDATES_SUBSCRIBE = 42;
  private static final int METHODID_MARKETS_DATA_SUBSCRIBE = 43;
  private static final int METHODID_ORDERS_SUBSCRIBE = 44;
  private static final int METHODID_POSITIONS_SUBSCRIBE = 45;
  private static final int METHODID_TRADES_SUBSCRIBE = 46;
  private static final int METHODID_TRANSFER_RESPONSES_SUBSCRIBE = 47;
  private static final int METHODID_GET_NODE_SIGNATURES_AGGREGATE = 48;
  private static final int METHODID_ASSET_BY_ID = 49;
  private static final int METHODID_ASSETS = 50;
  private static final int METHODID_ESTIMATE_FEE = 51;
  private static final int METHODID_ESTIMATE_MARGIN = 52;
  private static final int METHODID_ERC20WITHDRAWAL_APPROVAL = 53;
  private static final int METHODID_WITHDRAWAL = 54;
  private static final int METHODID_WITHDRAWALS = 55;
  private static final int METHODID_DEPOSIT = 56;
  private static final int METHODID_DEPOSITS = 57;
  private static final int METHODID_NETWORK_PARAMETERS = 58;
  private static final int METHODID_LIQUIDITY_PROVISIONS = 59;
  private static final int METHODID_ORACLE_SPEC = 60;
  private static final int METHODID_ORACLE_SPECS = 61;
  private static final int METHODID_ORACLE_DATA_BY_SPEC = 62;
  private static final int METHODID_OBSERVE_EVENT_BUS = 63;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TradingDataServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TradingDataServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_MARKET_ACCOUNTS:
          serviceImpl.marketAccounts((io.vegaprotocol.vega.api.Trading.MarketAccountsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketAccountsResponse>) responseObserver);
          break;
        case METHODID_PARTY_ACCOUNTS:
          serviceImpl.partyAccounts((io.vegaprotocol.vega.api.Trading.PartyAccountsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartyAccountsResponse>) responseObserver);
          break;
        case METHODID_FEE_INFRASTRUCTURE_ACCOUNTS:
          serviceImpl.feeInfrastructureAccounts((io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.FeeInfrastructureAccountsResponse>) responseObserver);
          break;
        case METHODID_CANDLES:
          serviceImpl.candles((io.vegaprotocol.vega.api.Trading.CandlesRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.CandlesResponse>) responseObserver);
          break;
        case METHODID_MARKET_DATA_BY_ID:
          serviceImpl.marketDataByID((io.vegaprotocol.vega.api.Trading.MarketDataByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDataByIDResponse>) responseObserver);
          break;
        case METHODID_MARKETS_DATA:
          serviceImpl.marketsData((io.vegaprotocol.vega.api.Trading.MarketsDataRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsDataResponse>) responseObserver);
          break;
        case METHODID_MARKET_BY_ID:
          serviceImpl.marketByID((io.vegaprotocol.vega.api.Trading.MarketByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketByIDResponse>) responseObserver);
          break;
        case METHODID_MARKET_DEPTH:
          serviceImpl.marketDepth((io.vegaprotocol.vega.api.Trading.MarketDepthRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthResponse>) responseObserver);
          break;
        case METHODID_MARKETS:
          serviceImpl.markets((io.vegaprotocol.vega.api.Trading.MarketsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsResponse>) responseObserver);
          break;
        case METHODID_ORDER_BY_MARKET_AND_ID:
          serviceImpl.orderByMarketAndID((io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByMarketAndIDResponse>) responseObserver);
          break;
        case METHODID_ORDER_BY_REFERENCE:
          serviceImpl.orderByReference((io.vegaprotocol.vega.api.Trading.OrderByReferenceRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByReferenceResponse>) responseObserver);
          break;
        case METHODID_ORDERS_BY_MARKET:
          serviceImpl.ordersByMarket((io.vegaprotocol.vega.api.Trading.OrdersByMarketRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersByMarketResponse>) responseObserver);
          break;
        case METHODID_ORDERS_BY_PARTY:
          serviceImpl.ordersByParty((io.vegaprotocol.vega.api.Trading.OrdersByPartyRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersByPartyResponse>) responseObserver);
          break;
        case METHODID_ORDER_BY_ID:
          serviceImpl.orderByID((io.vegaprotocol.vega.api.Trading.OrderByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderByIDResponse>) responseObserver);
          break;
        case METHODID_ORDER_VERSIONS_BY_ID:
          serviceImpl.orderVersionsByID((io.vegaprotocol.vega.api.Trading.OrderVersionsByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrderVersionsByIDResponse>) responseObserver);
          break;
        case METHODID_MARGIN_LEVELS:
          serviceImpl.marginLevels((io.vegaprotocol.vega.api.Trading.MarginLevelsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarginLevelsResponse>) responseObserver);
          break;
        case METHODID_PARTIES:
          serviceImpl.parties((io.vegaprotocol.vega.api.Trading.PartiesRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartiesResponse>) responseObserver);
          break;
        case METHODID_PARTY_BY_ID:
          serviceImpl.partyByID((io.vegaprotocol.vega.api.Trading.PartyByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PartyByIDResponse>) responseObserver);
          break;
        case METHODID_POSITIONS_BY_PARTY:
          serviceImpl.positionsByParty((io.vegaprotocol.vega.api.Trading.PositionsByPartyRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PositionsByPartyResponse>) responseObserver);
          break;
        case METHODID_LAST_TRADE:
          serviceImpl.lastTrade((io.vegaprotocol.vega.api.Trading.LastTradeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LastTradeResponse>) responseObserver);
          break;
        case METHODID_TRADES_BY_MARKET:
          serviceImpl.tradesByMarket((io.vegaprotocol.vega.api.Trading.TradesByMarketRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByMarketResponse>) responseObserver);
          break;
        case METHODID_TRADES_BY_ORDER:
          serviceImpl.tradesByOrder((io.vegaprotocol.vega.api.Trading.TradesByOrderRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByOrderResponse>) responseObserver);
          break;
        case METHODID_TRADES_BY_PARTY:
          serviceImpl.tradesByParty((io.vegaprotocol.vega.api.Trading.TradesByPartyRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesByPartyResponse>) responseObserver);
          break;
        case METHODID_GET_PROPOSALS:
          serviceImpl.getProposals((io.vegaprotocol.vega.api.Trading.GetProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalsResponse>) responseObserver);
          break;
        case METHODID_GET_PROPOSALS_BY_PARTY:
          serviceImpl.getProposalsByParty((io.vegaprotocol.vega.api.Trading.GetProposalsByPartyRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalsByPartyResponse>) responseObserver);
          break;
        case METHODID_GET_VOTES_BY_PARTY:
          serviceImpl.getVotesByParty((io.vegaprotocol.vega.api.Trading.GetVotesByPartyRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVotesByPartyResponse>) responseObserver);
          break;
        case METHODID_GET_NEW_MARKET_PROPOSALS:
          serviceImpl.getNewMarketProposals((io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNewMarketProposalsResponse>) responseObserver);
          break;
        case METHODID_GET_UPDATE_MARKET_PROPOSALS:
          serviceImpl.getUpdateMarketProposals((io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetUpdateMarketProposalsResponse>) responseObserver);
          break;
        case METHODID_GET_NETWORK_PARAMETERS_PROPOSALS:
          serviceImpl.getNetworkParametersProposals((io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNetworkParametersProposalsResponse>) responseObserver);
          break;
        case METHODID_GET_NEW_ASSET_PROPOSALS:
          serviceImpl.getNewAssetProposals((io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNewAssetProposalsResponse>) responseObserver);
          break;
        case METHODID_GET_PROPOSAL_BY_ID:
          serviceImpl.getProposalByID((io.vegaprotocol.vega.api.Trading.GetProposalByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalByIDResponse>) responseObserver);
          break;
        case METHODID_GET_PROPOSAL_BY_REFERENCE:
          serviceImpl.getProposalByReference((io.vegaprotocol.vega.api.Trading.GetProposalByReferenceRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetProposalByReferenceResponse>) responseObserver);
          break;
        case METHODID_OBSERVE_GOVERNANCE:
          serviceImpl.observeGovernance((io.vegaprotocol.vega.api.Trading.ObserveGovernanceRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveGovernanceResponse>) responseObserver);
          break;
        case METHODID_OBSERVE_PARTY_PROPOSALS:
          serviceImpl.observePartyProposals((io.vegaprotocol.vega.api.Trading.ObservePartyProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObservePartyProposalsResponse>) responseObserver);
          break;
        case METHODID_OBSERVE_PARTY_VOTES:
          serviceImpl.observePartyVotes((io.vegaprotocol.vega.api.Trading.ObservePartyVotesRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObservePartyVotesResponse>) responseObserver);
          break;
        case METHODID_OBSERVE_PROPOSAL_VOTES:
          serviceImpl.observeProposalVotes((io.vegaprotocol.vega.api.Trading.ObserveProposalVotesRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveProposalVotesResponse>) responseObserver);
          break;
        case METHODID_STATISTICS:
          serviceImpl.statistics((io.vegaprotocol.vega.api.Trading.StatisticsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.StatisticsResponse>) responseObserver);
          break;
        case METHODID_GET_VEGA_TIME:
          serviceImpl.getVegaTime((io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse>) responseObserver);
          break;
        case METHODID_ACCOUNTS_SUBSCRIBE:
          serviceImpl.accountsSubscribe((io.vegaprotocol.vega.api.Trading.AccountsSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AccountsSubscribeResponse>) responseObserver);
          break;
        case METHODID_CANDLES_SUBSCRIBE:
          serviceImpl.candlesSubscribe((io.vegaprotocol.vega.api.Trading.CandlesSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.CandlesSubscribeResponse>) responseObserver);
          break;
        case METHODID_MARGIN_LEVELS_SUBSCRIBE:
          serviceImpl.marginLevelsSubscribe((io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarginLevelsSubscribeResponse>) responseObserver);
          break;
        case METHODID_MARKET_DEPTH_SUBSCRIBE:
          serviceImpl.marketDepthSubscribe((io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthSubscribeResponse>) responseObserver);
          break;
        case METHODID_MARKET_DEPTH_UPDATES_SUBSCRIBE:
          serviceImpl.marketDepthUpdatesSubscribe((io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketDepthUpdatesSubscribeResponse>) responseObserver);
          break;
        case METHODID_MARKETS_DATA_SUBSCRIBE:
          serviceImpl.marketsDataSubscribe((io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.MarketsDataSubscribeResponse>) responseObserver);
          break;
        case METHODID_ORDERS_SUBSCRIBE:
          serviceImpl.ordersSubscribe((io.vegaprotocol.vega.api.Trading.OrdersSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OrdersSubscribeResponse>) responseObserver);
          break;
        case METHODID_POSITIONS_SUBSCRIBE:
          serviceImpl.positionsSubscribe((io.vegaprotocol.vega.api.Trading.PositionsSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PositionsSubscribeResponse>) responseObserver);
          break;
        case METHODID_TRADES_SUBSCRIBE:
          serviceImpl.tradesSubscribe((io.vegaprotocol.vega.api.Trading.TradesSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TradesSubscribeResponse>) responseObserver);
          break;
        case METHODID_TRANSFER_RESPONSES_SUBSCRIBE:
          serviceImpl.transferResponsesSubscribe((io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.TransferResponsesSubscribeResponse>) responseObserver);
          break;
        case METHODID_GET_NODE_SIGNATURES_AGGREGATE:
          serviceImpl.getNodeSignaturesAggregate((io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetNodeSignaturesAggregateResponse>) responseObserver);
          break;
        case METHODID_ASSET_BY_ID:
          serviceImpl.assetByID((io.vegaprotocol.vega.api.Trading.AssetByIDRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AssetByIDResponse>) responseObserver);
          break;
        case METHODID_ASSETS:
          serviceImpl.assets((io.vegaprotocol.vega.api.Trading.AssetsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.AssetsResponse>) responseObserver);
          break;
        case METHODID_ESTIMATE_FEE:
          serviceImpl.estimateFee((io.vegaprotocol.vega.api.Trading.EstimateFeeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.EstimateFeeResponse>) responseObserver);
          break;
        case METHODID_ESTIMATE_MARGIN:
          serviceImpl.estimateMargin((io.vegaprotocol.vega.api.Trading.EstimateMarginRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.EstimateMarginResponse>) responseObserver);
          break;
        case METHODID_ERC20WITHDRAWAL_APPROVAL:
          serviceImpl.eRC20WithdrawalApproval((io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ERC20WithdrawalApprovalResponse>) responseObserver);
          break;
        case METHODID_WITHDRAWAL:
          serviceImpl.withdrawal((io.vegaprotocol.vega.api.Trading.WithdrawalRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.WithdrawalResponse>) responseObserver);
          break;
        case METHODID_WITHDRAWALS:
          serviceImpl.withdrawals((io.vegaprotocol.vega.api.Trading.WithdrawalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.WithdrawalsResponse>) responseObserver);
          break;
        case METHODID_DEPOSIT:
          serviceImpl.deposit((io.vegaprotocol.vega.api.Trading.DepositRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.DepositResponse>) responseObserver);
          break;
        case METHODID_DEPOSITS:
          serviceImpl.deposits((io.vegaprotocol.vega.api.Trading.DepositsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.DepositsResponse>) responseObserver);
          break;
        case METHODID_NETWORK_PARAMETERS:
          serviceImpl.networkParameters((io.vegaprotocol.vega.api.Trading.NetworkParametersRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.NetworkParametersResponse>) responseObserver);
          break;
        case METHODID_LIQUIDITY_PROVISIONS:
          serviceImpl.liquidityProvisions((io.vegaprotocol.vega.api.Trading.LiquidityProvisionsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LiquidityProvisionsResponse>) responseObserver);
          break;
        case METHODID_ORACLE_SPEC:
          serviceImpl.oracleSpec((io.vegaprotocol.vega.api.Trading.OracleSpecRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleSpecResponse>) responseObserver);
          break;
        case METHODID_ORACLE_SPECS:
          serviceImpl.oracleSpecs((io.vegaprotocol.vega.api.Trading.OracleSpecsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleSpecsResponse>) responseObserver);
          break;
        case METHODID_ORACLE_DATA_BY_SPEC:
          serviceImpl.oracleDataBySpec((io.vegaprotocol.vega.api.Trading.OracleDataBySpecRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.OracleDataBySpecResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_OBSERVE_EVENT_BUS:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.observeEventBus(
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class TradingDataServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TradingDataServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.vegaprotocol.vega.api.Trading.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("TradingDataService");
    }
  }

  private static final class TradingDataServiceFileDescriptorSupplier
      extends TradingDataServiceBaseDescriptorSupplier {
    TradingDataServiceFileDescriptorSupplier() {}
  }

  private static final class TradingDataServiceMethodDescriptorSupplier
      extends TradingDataServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TradingDataServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (TradingDataServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TradingDataServiceFileDescriptorSupplier())
              .addMethod(getMarketAccountsMethod())
              .addMethod(getPartyAccountsMethod())
              .addMethod(getFeeInfrastructureAccountsMethod())
              .addMethod(getCandlesMethod())
              .addMethod(getMarketDataByIDMethod())
              .addMethod(getMarketsDataMethod())
              .addMethod(getMarketByIDMethod())
              .addMethod(getMarketDepthMethod())
              .addMethod(getMarketsMethod())
              .addMethod(getOrderByMarketAndIDMethod())
              .addMethod(getOrderByReferenceMethod())
              .addMethod(getOrdersByMarketMethod())
              .addMethod(getOrdersByPartyMethod())
              .addMethod(getOrderByIDMethod())
              .addMethod(getOrderVersionsByIDMethod())
              .addMethod(getMarginLevelsMethod())
              .addMethod(getPartiesMethod())
              .addMethod(getPartyByIDMethod())
              .addMethod(getPositionsByPartyMethod())
              .addMethod(getLastTradeMethod())
              .addMethod(getTradesByMarketMethod())
              .addMethod(getTradesByOrderMethod())
              .addMethod(getTradesByPartyMethod())
              .addMethod(getGetProposalsMethod())
              .addMethod(getGetProposalsByPartyMethod())
              .addMethod(getGetVotesByPartyMethod())
              .addMethod(getGetNewMarketProposalsMethod())
              .addMethod(getGetUpdateMarketProposalsMethod())
              .addMethod(getGetNetworkParametersProposalsMethod())
              .addMethod(getGetNewAssetProposalsMethod())
              .addMethod(getGetProposalByIDMethod())
              .addMethod(getGetProposalByReferenceMethod())
              .addMethod(getObserveGovernanceMethod())
              .addMethod(getObservePartyProposalsMethod())
              .addMethod(getObservePartyVotesMethod())
              .addMethod(getObserveProposalVotesMethod())
              .addMethod(getObserveEventBusMethod())
              .addMethod(getStatisticsMethod())
              .addMethod(getGetVegaTimeMethod())
              .addMethod(getAccountsSubscribeMethod())
              .addMethod(getCandlesSubscribeMethod())
              .addMethod(getMarginLevelsSubscribeMethod())
              .addMethod(getMarketDepthSubscribeMethod())
              .addMethod(getMarketDepthUpdatesSubscribeMethod())
              .addMethod(getMarketsDataSubscribeMethod())
              .addMethod(getOrdersSubscribeMethod())
              .addMethod(getPositionsSubscribeMethod())
              .addMethod(getTradesSubscribeMethod())
              .addMethod(getTransferResponsesSubscribeMethod())
              .addMethod(getGetNodeSignaturesAggregateMethod())
              .addMethod(getAssetByIDMethod())
              .addMethod(getAssetsMethod())
              .addMethod(getEstimateFeeMethod())
              .addMethod(getEstimateMarginMethod())
              .addMethod(getERC20WithdrawalApprovalMethod())
              .addMethod(getWithdrawalMethod())
              .addMethod(getWithdrawalsMethod())
              .addMethod(getDepositMethod())
              .addMethod(getDepositsMethod())
              .addMethod(getNetworkParametersMethod())
              .addMethod(getLiquidityProvisionsMethod())
              .addMethod(getOracleSpecMethod())
              .addMethod(getOracleSpecsMethod())
              .addMethod(getOracleDataBySpecMethod())
              .build();
        }
      }
    }
    return result;
  }
}
