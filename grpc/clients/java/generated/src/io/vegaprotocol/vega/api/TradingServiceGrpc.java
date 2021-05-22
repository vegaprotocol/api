package io.vegaprotocol.vega.api;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.37.0)",
    comments = "Source: api/trading.proto")
public final class TradingServiceGrpc {

  private TradingServiceGrpc() {}

  public static final String SERVICE_NAME = "api.v1.TradingService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest,
      io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse> getPrepareSubmitOrderMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareSubmitOrder",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest,
      io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse> getPrepareSubmitOrderMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest, io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse> getPrepareSubmitOrderMethod;
    if ((getPrepareSubmitOrderMethod = TradingServiceGrpc.getPrepareSubmitOrderMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareSubmitOrderMethod = TradingServiceGrpc.getPrepareSubmitOrderMethod) == null) {
          TradingServiceGrpc.getPrepareSubmitOrderMethod = getPrepareSubmitOrderMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest, io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareSubmitOrder"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareSubmitOrder"))
              .build();
        }
      }
    }
    return getPrepareSubmitOrderMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest,
      io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse> getPrepareCancelOrderMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareCancelOrder",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest,
      io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse> getPrepareCancelOrderMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest, io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse> getPrepareCancelOrderMethod;
    if ((getPrepareCancelOrderMethod = TradingServiceGrpc.getPrepareCancelOrderMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareCancelOrderMethod = TradingServiceGrpc.getPrepareCancelOrderMethod) == null) {
          TradingServiceGrpc.getPrepareCancelOrderMethod = getPrepareCancelOrderMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest, io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareCancelOrder"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareCancelOrder"))
              .build();
        }
      }
    }
    return getPrepareCancelOrderMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest,
      io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse> getPrepareAmendOrderMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareAmendOrder",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest,
      io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse> getPrepareAmendOrderMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest, io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse> getPrepareAmendOrderMethod;
    if ((getPrepareAmendOrderMethod = TradingServiceGrpc.getPrepareAmendOrderMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareAmendOrderMethod = TradingServiceGrpc.getPrepareAmendOrderMethod) == null) {
          TradingServiceGrpc.getPrepareAmendOrderMethod = getPrepareAmendOrderMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest, io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareAmendOrder"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareAmendOrder"))
              .build();
        }
      }
    }
    return getPrepareAmendOrderMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest,
      io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse> getPrepareWithdrawMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareWithdraw",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest,
      io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse> getPrepareWithdrawMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest, io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse> getPrepareWithdrawMethod;
    if ((getPrepareWithdrawMethod = TradingServiceGrpc.getPrepareWithdrawMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareWithdrawMethod = TradingServiceGrpc.getPrepareWithdrawMethod) == null) {
          TradingServiceGrpc.getPrepareWithdrawMethod = getPrepareWithdrawMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest, io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareWithdraw"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareWithdraw"))
              .build();
        }
      }
    }
    return getPrepareWithdrawMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest,
      io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse> getSubmitTransactionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SubmitTransaction",
      requestType = io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest,
      io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse> getSubmitTransactionMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest, io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse> getSubmitTransactionMethod;
    if ((getSubmitTransactionMethod = TradingServiceGrpc.getSubmitTransactionMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getSubmitTransactionMethod = TradingServiceGrpc.getSubmitTransactionMethod) == null) {
          TradingServiceGrpc.getSubmitTransactionMethod = getSubmitTransactionMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest, io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SubmitTransaction"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("SubmitTransaction"))
              .build();
        }
      }
    }
    return getSubmitTransactionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest,
      io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse> getPrepareProposalSubmissionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareProposalSubmission",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest,
      io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse> getPrepareProposalSubmissionMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest, io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse> getPrepareProposalSubmissionMethod;
    if ((getPrepareProposalSubmissionMethod = TradingServiceGrpc.getPrepareProposalSubmissionMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareProposalSubmissionMethod = TradingServiceGrpc.getPrepareProposalSubmissionMethod) == null) {
          TradingServiceGrpc.getPrepareProposalSubmissionMethod = getPrepareProposalSubmissionMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest, io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareProposalSubmission"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareProposalSubmission"))
              .build();
        }
      }
    }
    return getPrepareProposalSubmissionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest,
      io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse> getPrepareVoteSubmissionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareVoteSubmission",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest,
      io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse> getPrepareVoteSubmissionMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest, io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse> getPrepareVoteSubmissionMethod;
    if ((getPrepareVoteSubmissionMethod = TradingServiceGrpc.getPrepareVoteSubmissionMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareVoteSubmissionMethod = TradingServiceGrpc.getPrepareVoteSubmissionMethod) == null) {
          TradingServiceGrpc.getPrepareVoteSubmissionMethod = getPrepareVoteSubmissionMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest, io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareVoteSubmission"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareVoteSubmission"))
              .build();
        }
      }
    }
    return getPrepareVoteSubmissionMethod;
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

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest,
      io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse> getPrepareLiquidityProvisionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PrepareLiquidityProvision",
      requestType = io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest.class,
      responseType = io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest,
      io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse> getPrepareLiquidityProvisionMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest, io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse> getPrepareLiquidityProvisionMethod;
    if ((getPrepareLiquidityProvisionMethod = TradingServiceGrpc.getPrepareLiquidityProvisionMethod) == null) {
      synchronized (TradingServiceGrpc.class) {
        if ((getPrepareLiquidityProvisionMethod = TradingServiceGrpc.getPrepareLiquidityProvisionMethod) == null) {
          TradingServiceGrpc.getPrepareLiquidityProvisionMethod = getPrepareLiquidityProvisionMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest, io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PrepareLiquidityProvision"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse.getDefaultInstance()))
              .setSchemaDescriptor(new TradingServiceMethodDescriptorSupplier("PrepareLiquidityProvision"))
              .build();
        }
      }
    }
    return getPrepareLiquidityProvisionMethod;
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
     * Prepare a submit order request
     * </pre>
     */
    public void prepareSubmitOrder(io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareSubmitOrderMethod(), responseObserver);
    }

    /**
     * <pre>
     * Prepare a cancel order request
     * </pre>
     */
    public void prepareCancelOrder(io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareCancelOrderMethod(), responseObserver);
    }

    /**
     * <pre>
     * Prepare an amend order request
     * </pre>
     */
    public void prepareAmendOrder(io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareAmendOrderMethod(), responseObserver);
    }

    /**
     * <pre>
     * Request a withdrawal
     * </pre>
     */
    public void prepareWithdraw(io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareWithdrawMethod(), responseObserver);
    }

    /**
     * <pre>
     * Submit a signed transaction
     * </pre>
     */
    public void submitTransaction(io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSubmitTransactionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Prepare a governance proposal
     * </pre>
     */
    public void prepareProposalSubmission(io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareProposalSubmissionMethod(), responseObserver);
    }

    /**
     * <pre>
     * Prepare a governance vote
     * </pre>
     */
    public void prepareVoteSubmission(io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareVoteSubmissionMethod(), responseObserver);
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
     * Prepare a liquidity provision request
     * </pre>
     */
    public void prepareLiquidityProvision(io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPrepareLiquidityProvisionMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getPrepareSubmitOrderMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest,
                io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse>(
                  this, METHODID_PREPARE_SUBMIT_ORDER)))
          .addMethod(
            getPrepareCancelOrderMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest,
                io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse>(
                  this, METHODID_PREPARE_CANCEL_ORDER)))
          .addMethod(
            getPrepareAmendOrderMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest,
                io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse>(
                  this, METHODID_PREPARE_AMEND_ORDER)))
          .addMethod(
            getPrepareWithdrawMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest,
                io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse>(
                  this, METHODID_PREPARE_WITHDRAW)))
          .addMethod(
            getSubmitTransactionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest,
                io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse>(
                  this, METHODID_SUBMIT_TRANSACTION)))
          .addMethod(
            getPrepareProposalSubmissionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest,
                io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse>(
                  this, METHODID_PREPARE_PROPOSAL_SUBMISSION)))
          .addMethod(
            getPrepareVoteSubmissionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest,
                io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse>(
                  this, METHODID_PREPARE_VOTE_SUBMISSION)))
          .addMethod(
            getPropagateChainEventMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest,
                io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse>(
                  this, METHODID_PROPAGATE_CHAIN_EVENT)))
          .addMethod(
            getPrepareLiquidityProvisionMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest,
                io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse>(
                  this, METHODID_PREPARE_LIQUIDITY_PROVISION)))
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
     * Prepare a submit order request
     * </pre>
     */
    public void prepareSubmitOrder(io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareSubmitOrderMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Prepare a cancel order request
     * </pre>
     */
    public void prepareCancelOrder(io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareCancelOrderMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Prepare an amend order request
     * </pre>
     */
    public void prepareAmendOrder(io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareAmendOrderMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Request a withdrawal
     * </pre>
     */
    public void prepareWithdraw(io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareWithdrawMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Submit a signed transaction
     * </pre>
     */
    public void submitTransaction(io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSubmitTransactionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Prepare a governance proposal
     * </pre>
     */
    public void prepareProposalSubmission(io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareProposalSubmissionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     * <pre>
     * Prepare a governance vote
     * </pre>
     */
    public void prepareVoteSubmission(io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareVoteSubmissionMethod(), getCallOptions()), request, responseObserver);
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
     * Prepare a liquidity provision request
     * </pre>
     */
    public void prepareLiquidityProvision(io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPrepareLiquidityProvisionMethod(), getCallOptions()), request, responseObserver);
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
     * Prepare a submit order request
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse prepareSubmitOrder(io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareSubmitOrderMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Prepare a cancel order request
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse prepareCancelOrder(io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareCancelOrderMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Prepare an amend order request
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse prepareAmendOrder(io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareAmendOrderMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Request a withdrawal
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse prepareWithdraw(io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareWithdrawMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Submit a signed transaction
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse submitTransaction(io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSubmitTransactionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Prepare a governance proposal
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse prepareProposalSubmission(io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareProposalSubmissionMethod(), getCallOptions(), request);
    }

    /**
     * <pre>
     * Prepare a governance vote
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse prepareVoteSubmission(io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareVoteSubmissionMethod(), getCallOptions(), request);
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
     * Prepare a liquidity provision request
     * </pre>
     */
    public io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse prepareLiquidityProvision(io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPrepareLiquidityProvisionMethod(), getCallOptions(), request);
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
     * Prepare a submit order request
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse> prepareSubmitOrder(
        io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareSubmitOrderMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Prepare a cancel order request
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse> prepareCancelOrder(
        io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareCancelOrderMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Prepare an amend order request
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse> prepareAmendOrder(
        io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareAmendOrderMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Request a withdrawal
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse> prepareWithdraw(
        io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareWithdrawMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Submit a signed transaction
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse> submitTransaction(
        io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSubmitTransactionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Prepare a governance proposal
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse> prepareProposalSubmission(
        io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareProposalSubmissionMethod(), getCallOptions()), request);
    }

    /**
     * <pre>
     * Prepare a governance vote
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse> prepareVoteSubmission(
        io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareVoteSubmissionMethod(), getCallOptions()), request);
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
     * Prepare a liquidity provision request
     * </pre>
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse> prepareLiquidityProvision(
        io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPrepareLiquidityProvisionMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_PREPARE_SUBMIT_ORDER = 0;
  private static final int METHODID_PREPARE_CANCEL_ORDER = 1;
  private static final int METHODID_PREPARE_AMEND_ORDER = 2;
  private static final int METHODID_PREPARE_WITHDRAW = 3;
  private static final int METHODID_SUBMIT_TRANSACTION = 4;
  private static final int METHODID_PREPARE_PROPOSAL_SUBMISSION = 5;
  private static final int METHODID_PREPARE_VOTE_SUBMISSION = 6;
  private static final int METHODID_PROPAGATE_CHAIN_EVENT = 7;
  private static final int METHODID_PREPARE_LIQUIDITY_PROVISION = 8;

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
        case METHODID_PREPARE_SUBMIT_ORDER:
          serviceImpl.prepareSubmitOrder((io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareSubmitOrderResponse>) responseObserver);
          break;
        case METHODID_PREPARE_CANCEL_ORDER:
          serviceImpl.prepareCancelOrder((io.vegaprotocol.vega.api.Trading.PrepareCancelOrderRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareCancelOrderResponse>) responseObserver);
          break;
        case METHODID_PREPARE_AMEND_ORDER:
          serviceImpl.prepareAmendOrder((io.vegaprotocol.vega.api.Trading.PrepareAmendOrderRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareAmendOrderResponse>) responseObserver);
          break;
        case METHODID_PREPARE_WITHDRAW:
          serviceImpl.prepareWithdraw((io.vegaprotocol.vega.api.Trading.PrepareWithdrawRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareWithdrawResponse>) responseObserver);
          break;
        case METHODID_SUBMIT_TRANSACTION:
          serviceImpl.submitTransaction((io.vegaprotocol.vega.api.Trading.SubmitTransactionRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.SubmitTransactionResponse>) responseObserver);
          break;
        case METHODID_PREPARE_PROPOSAL_SUBMISSION:
          serviceImpl.prepareProposalSubmission((io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareProposalSubmissionResponse>) responseObserver);
          break;
        case METHODID_PREPARE_VOTE_SUBMISSION:
          serviceImpl.prepareVoteSubmission((io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareVoteSubmissionResponse>) responseObserver);
          break;
        case METHODID_PROPAGATE_CHAIN_EVENT:
          serviceImpl.propagateChainEvent((io.vegaprotocol.vega.api.Trading.PropagateChainEventRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PropagateChainEventResponse>) responseObserver);
          break;
        case METHODID_PREPARE_LIQUIDITY_PROVISION:
          serviceImpl.prepareLiquidityProvision((io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.api.Trading.PrepareLiquidityProvisionResponse>) responseObserver);
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
              .addMethod(getPrepareSubmitOrderMethod())
              .addMethod(getPrepareCancelOrderMethod())
              .addMethod(getPrepareAmendOrderMethod())
              .addMethod(getPrepareWithdrawMethod())
              .addMethod(getSubmitTransactionMethod())
              .addMethod(getPrepareProposalSubmissionMethod())
              .addMethod(getPrepareVoteSubmissionMethod())
              .addMethod(getPropagateChainEventMethod())
              .addMethod(getPrepareLiquidityProvisionMethod())
              .build();
        }
      }
    }
    return result;
  }
}
