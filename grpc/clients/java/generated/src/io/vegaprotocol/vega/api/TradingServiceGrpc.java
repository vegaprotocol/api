package io.vegaprotocol.vega.api;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.38.0)",
    comments = "Source: api/trading.proto")
public final class TradingServiceGrpc {

  private TradingServiceGrpc() {}

  public static final String SERVICE_NAME = "api.v1.TradingService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request,
      io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response> getSubmitTransactionV2Method;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SubmitTransactionV2",
      requestType = io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request.class,
      responseType = io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request,
      io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response> getSubmitTransactionV2Method() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request, io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response> getSubmitTransactionV2Method;
    if ((getSubmitTransactionV2Method = TradingServiceGrpc.getSubmitTransactionV2Method) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getSubmitTransactionV2Method = TradingServiceGrpc.getSubmitTransactionV2Method) == null) {
          TradingServiceGrpc.getSubmitTransactionV2Method = getSubmitTransactionV2Method =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request, io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SubmitTransactionV2"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("SubmitTransactionV2"))
              .build();
        }
      }
    }
    return getSubmitTransactionV2Method;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest,
      io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse> getPropagateChainEventMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PropagateChainEvent",
      requestType = io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest,
      io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse> getPropagateChainEventMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest, io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse> getPropagateChainEventMethod;
    if ((getPropagateChainEventMethod = TradingServiceGrpc.getPropagateChainEventMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPropagateChainEventMethod = TradingServiceGrpc.getPropagateChainEventMethod) == null) {
          TradingServiceGrpc.getPropagateChainEventMethod = getPropagateChainEventMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest, io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PropagateChainEvent"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PropagateChainEvent"))
              .build();
        }
      }
    }
    return getPropagateChainEventMethod;
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
    if ((getStatisticsMethod = TradingServiceGrpc.getStatisticsMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getStatisticsMethod = TradingServiceGrpc.getStatisticsMethod) == null) {
          TradingServiceGrpc.getStatisticsMethod = getStatisticsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.StatisticsRequest, io.vegaprotocol.vega.api.Trading.StatisticsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Statistics"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.StatisticsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.StatisticsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("Statistics"))
              .build();
        }
      }
    }
    return getStatisticsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest,
      io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse> getLastBlockHeightMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "LastBlockHeight",
      requestType = io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest,
      io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse> getLastBlockHeightMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest, io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse> getLastBlockHeightMethod;
    if ((getLastBlockHeightMethod = TradingServiceGrpc.getLastBlockHeightMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getLastBlockHeightMethod = TradingServiceGrpc.getLastBlockHeightMethod) == null) {
          TradingServiceGrpc.getLastBlockHeightMethod = getLastBlockHeightMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest, io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "LastBlockHeight"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("LastBlockHeight"))
              .build();
        }
      }
    }
    return getLastBlockHeightMethod;
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
    if ((getGetVegaTimeMethod = TradingServiceGrpc.getGetVegaTimeMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getGetVegaTimeMethod = TradingServiceGrpc.getGetVegaTimeMethod) == null) {
          TradingServiceGrpc.getGetVegaTimeMethod = getGetVegaTimeMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest, io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "GetVegaTime"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("GetVegaTime"))
              .build();
        }
      }
    }
    return getGetVegaTimeMethod;
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
    if ((getObserveEventBusMethod = TradingServiceGrpc.getObserveEventBusMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getObserveEventBusMethod = TradingServiceGrpc.getObserveEventBusMethod) == null) {
          TradingServiceGrpc.getObserveEventBusMethod = getObserveEventBusMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest, io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ObserveEventBus"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("ObserveEventBus"))
              .build();
        }
      }
    }
    return getObserveEventBusMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TradingServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradingServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradingServiceStub>() {
        @java.lang.Override
        public TradingServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradingServiceStub(channel, callOptions);
        }
      };
    return TradingServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TradingServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradingServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradingServiceBlockingStub>() {
        @java.lang.Override
        public TradingServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradingServiceBlockingStub(channel, callOptions);
        }
      };
    return TradingServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TradingServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<TradingServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<TradingServiceFutureStub>() {
        @java.lang.Override
        public TradingServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new TradingServiceFutureStub(channel, callOptions);
        }
      };
    return TradingServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class TradingServiceImplBase implements io.grpc.BindableService {

    /**
     * <pre>
     * Submit a signed transaction (v2)
     * </pre>
     */
    public void submitTransactionV2(io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSubmitTransactionV2Method(), responseObserver);
    }

    /**
     * <pre>
     * Propagate a chain event
     * </pre>
     */
    public void propagateChainEvent(io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPropagateChainEventMethod(), responseObserver);
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
     * Get the height of the last tendermint block
     * </pre>
     */
    public void lastBlockHeight(io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getLastBlockHeightMethod(), responseObserver);
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
     * Subscribe to a stream of events from the core
     * </pre>
     */
    public io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest> observeEventBus(
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> responseObserver) {
      return io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall(getObserveEventBusMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getSubmitTransactionV2Method(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request,
                io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response>(
                  this, METHODID_SUBMIT_TRANSACTION_V2)))
          .addMethod(
            getPropagateChainEventMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest,
                io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse>(
                  this, METHODID_PROPAGATE_CHAIN_EVENT)))
          .addMethod(
            getStatisticsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.StatisticsRequest,
                io.vegaprotocol.vega.api.Trading.StatisticsResponse>(
                  this, METHODID_STATISTICS)))
          .addMethod(
            getLastBlockHeightMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest,
                io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse>(
                  this, METHODID_LAST_BLOCK_HEIGHT)))
          .addMethod(
            getGetVegaTimeMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest,
                io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse>(
                  this, METHODID_GET_VEGA_TIME)))
          .addMethod(
            getObserveEventBusMethod(),
            io.grpc.stub.ServerCalls.asyncBidiStreamingCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest,
                io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse>(
                  this, METHODID_OBSERVE_EVENT_BUS)))
          .build();
    }
  }

  /**
   */
  public static final class TradingServiceStub extends io.grpc.stub.AbstractAsyncStub<TradingServiceStub> {
    private TradingServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradingServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradingServiceStub(channel, callOptions);
    }

    /**
     * <pre>
     * Submit a signed transaction (v2)
     * </pre>
     */
    public void submitTransactionV2(io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSubmitTransactionV2Method(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Propagate a chain event
     * </pre>
     */
    public void propagateChainEvent(io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPropagateChainEventMethod(), getCallOptions()), request, responseObserver);
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
     * Get the height of the last tendermint block
     * </pre>
     */
    public void lastBlockHeight(io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getLastBlockHeightMethod(), getCallOptions()), request, responseObserver);
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
     * Subscribe to a stream of events from the core
     * </pre>
     */
    public io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusRequest> observeEventBus(
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.ObserveEventBusResponse> responseObserver) {
      return io.grpc.stub.ClientCalls.asyncBidiStreamingCall(
          getChannel().newCall(getObserveEventBusMethod(), getCallOptions()), responseObserver);
    }
  }

  /**
   */
  public static final class TradingServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<TradingServiceBlockingStub> {
    private TradingServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradingServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradingServiceBlockingStub(channel, callOptions);
    }

    /**
     * <pre>
     * Submit a signed transaction (v2)
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response submitTransactionV2(io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSubmitTransactionV2Method(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Propagate a chain event
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse propagateChainEvent(io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPropagateChainEventMethod(), getCallOptions(), request);
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
     * Get the height of the last tendermint block
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse lastBlockHeight(io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getLastBlockHeightMethod(), getCallOptions(), request);
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
  }

  /**
   */
  public static final class TradingServiceFutureStub extends io.grpc.stub.AbstractFutureStub<TradingServiceFutureStub> {
    private TradingServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TradingServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new TradingServiceFutureStub(channel, callOptions);
    }

    /**
     * <pre>
     * Submit a signed transaction (v2)
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response> submitTransactionV2(
        io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSubmitTransactionV2Method(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Propagate a chain event
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse> propagateChainEvent(
        io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPropagateChainEventMethod(), getCallOptions()), request);
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
     * Get the height of the last tendermint block
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse> lastBlockHeight(
        io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getLastBlockHeightMethod(), getCallOptions()), request);
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
  }

  private static final int METHODID_SUBMIT_TRANSACTION_V2 = 0;
  private static final int METHODID_PROPAGATE_CHAIN_EVENT = 1;
  private static final int METHODID_STATISTICS = 2;
  private static final int METHODID_LAST_BLOCK_HEIGHT = 3;
  private static final int METHODID_GET_VEGA_TIME = 4;
  private static final int METHODID_OBSERVE_EVENT_BUS = 5;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TradingServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TradingServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SUBMIT_TRANSACTION_V2:
          serviceImpl.submitTransactionV2((io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Request) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.SubmitTransactionV2Response>) responseObserver);
          break;
        case METHODID_PROPAGATE_CHAIN_EVENT:
          serviceImpl.propagateChainEvent((io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse>) responseObserver);
          break;
        case METHODID_STATISTICS:
          serviceImpl.statistics((io.vegaprotocol.vega.api.Trading.StatisticsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.StatisticsResponse>) responseObserver);
          break;
        case METHODID_LAST_BLOCK_HEIGHT:
          serviceImpl.lastBlockHeight((io.vegaprotocol.vega.api.Trading.LastBlockHeightRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.LastBlockHeightResponse>) responseObserver);
          break;
        case METHODID_GET_VEGA_TIME:
          serviceImpl.getVegaTime((io.vegaprotocol.vega.api.Trading.GetVegaTimeRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.GetVegaTimeResponse>) responseObserver);
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

  private static abstract class TradingServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TradingServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.vegaprotocol.vega.api.Trading.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("TradingService");
    }
  }

  private static final class TradingServiceFileDescriptorSupplier
      extends TradingServiceBaseDescriptorSupplier {
    TradingServiceFileDescriptorSupplier() {}
  }

  private static final class TradingServiceMethodDescriptorSupplier
      extends TradingServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TradingServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (TradingServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TradingServiceFileDescriptorSupplier())
              .addMethod(getSubmitTransactionV2Method())
              .addMethod(getPropagateChainEventMethod())
              .addMethod(getStatisticsMethod())
              .addMethod(getLastBlockHeightMethod())
              .addMethod(getGetVegaTimeMethod())
              .addMethod(getObserveEventBusMethod())
              .build();
        }
      }
    }
    return result;
  }
}
