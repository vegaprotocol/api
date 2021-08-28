package io.vegaprotocol.vega.coreapi.v1;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.38.0)",
    comments = "Source: coreapi/v1/coreapi.proto")
public final class CoreApiServiceGrpc {

  private CoreApiServiceGrpc() {}

  public static final String SERVICE_NAME = "vega.coreapi.v1.CoreApiService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse> getListAccountsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListAccounts",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse> getListAccountsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse> getListAccountsMethod;
    if ((getListAccountsMethod = CoreApiServiceGrpc.getListAccountsMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListAccountsMethod = CoreApiServiceGrpc.getListAccountsMethod) == null) {
          CoreApiServiceGrpc.getListAccountsMethod = getListAccountsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListAccounts"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListAccounts"))
              .build();
        }
      }
    }
    return getListAccountsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse> getListAssetsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListAssets",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse> getListAssetsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse> getListAssetsMethod;
    if ((getListAssetsMethod = CoreApiServiceGrpc.getListAssetsMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListAssetsMethod = CoreApiServiceGrpc.getListAssetsMethod) == null) {
          CoreApiServiceGrpc.getListAssetsMethod = getListAssetsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListAssets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListAssets"))
              .build();
        }
      }
    }
    return getListAssetsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse> getListNetworkParametersMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListNetworkParameters",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse> getListNetworkParametersMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse> getListNetworkParametersMethod;
    if ((getListNetworkParametersMethod = CoreApiServiceGrpc.getListNetworkParametersMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListNetworkParametersMethod = CoreApiServiceGrpc.getListNetworkParametersMethod) == null) {
          CoreApiServiceGrpc.getListNetworkParametersMethod = getListNetworkParametersMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListNetworkParameters"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListNetworkParameters"))
              .build();
        }
      }
    }
    return getListNetworkParametersMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse> getListPartiesMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListParties",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse> getListPartiesMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse> getListPartiesMethod;
    if ((getListPartiesMethod = CoreApiServiceGrpc.getListPartiesMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListPartiesMethod = CoreApiServiceGrpc.getListPartiesMethod) == null) {
          CoreApiServiceGrpc.getListPartiesMethod = getListPartiesMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListParties"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListParties"))
              .build();
        }
      }
    }
    return getListPartiesMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse> getListValidatorsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListValidators",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse> getListValidatorsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse> getListValidatorsMethod;
    if ((getListValidatorsMethod = CoreApiServiceGrpc.getListValidatorsMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListValidatorsMethod = CoreApiServiceGrpc.getListValidatorsMethod) == null) {
          CoreApiServiceGrpc.getListValidatorsMethod = getListValidatorsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListValidators"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListValidators"))
              .build();
        }
      }
    }
    return getListValidatorsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse> getListMarketsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListMarkets",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse> getListMarketsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse> getListMarketsMethod;
    if ((getListMarketsMethod = CoreApiServiceGrpc.getListMarketsMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListMarketsMethod = CoreApiServiceGrpc.getListMarketsMethod) == null) {
          CoreApiServiceGrpc.getListMarketsMethod = getListMarketsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListMarkets"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListMarkets"))
              .build();
        }
      }
    }
    return getListMarketsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse> getListProposalsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListProposals",
      requestType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest.class,
      responseType = io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest,
      io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse> getListProposalsMethod() {
    io.grpc.MethodDescriptor<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse> getListProposalsMethod;
    if ((getListProposalsMethod = CoreApiServiceGrpc.getListProposalsMethod) == null) {
      synchronized (CoreApiServiceGrpc.class) {
        if ((getListProposalsMethod = CoreApiServiceGrpc.getListProposalsMethod) == null) {
          CoreApiServiceGrpc.getListProposalsMethod = getListProposalsMethod =
              io.grpc.MethodDescriptor.<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest, io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ListProposals"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse.getDefaultInstance()))
              .setSchemaDescriptor(new CoreApiServiceMethodDescriptorSupplier("ListProposals"))
              .build();
        }
      }
    }
    return getListProposalsMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static CoreApiServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CoreApiServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CoreApiServiceStub>() {
        @java.lang.Override
        public CoreApiServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CoreApiServiceStub(channel, callOptions);
        }
      };
    return CoreApiServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static CoreApiServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CoreApiServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CoreApiServiceBlockingStub>() {
        @java.lang.Override
        public CoreApiServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CoreApiServiceBlockingStub(channel, callOptions);
        }
      };
    return CoreApiServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static CoreApiServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<CoreApiServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<CoreApiServiceFutureStub>() {
        @java.lang.Override
        public CoreApiServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new CoreApiServiceFutureStub(channel, callOptions);
        }
      };
    return CoreApiServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class CoreApiServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void listAccounts(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListAccountsMethod(), responseObserver);
    }

    /**
     */
    public void listAssets(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListAssetsMethod(), responseObserver);
    }

    /**
     */
    public void listNetworkParameters(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListNetworkParametersMethod(), responseObserver);
    }

    /**
     */
    public void listParties(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListPartiesMethod(), responseObserver);
    }

    /**
     */
    public void listValidators(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListValidatorsMethod(), responseObserver);
    }

    /**
     */
    public void listMarkets(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListMarketsMethod(), responseObserver);
    }

    /**
     */
    public void listProposals(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getListProposalsMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getListAccountsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse>(
                  this, METHODID_LIST_ACCOUNTS)))
          .addMethod(
            getListAssetsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse>(
                  this, METHODID_LIST_ASSETS)))
          .addMethod(
            getListNetworkParametersMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse>(
                  this, METHODID_LIST_NETWORK_PARAMETERS)))
          .addMethod(
            getListPartiesMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse>(
                  this, METHODID_LIST_PARTIES)))
          .addMethod(
            getListValidatorsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse>(
                  this, METHODID_LIST_VALIDATORS)))
          .addMethod(
            getListMarketsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse>(
                  this, METHODID_LIST_MARKETS)))
          .addMethod(
            getListProposalsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest,
                io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse>(
                  this, METHODID_LIST_PROPOSALS)))
          .build();
    }
  }

  /**
   */
  public static final class CoreApiServiceStub extends io.grpc.stub.AbstractAsyncStub<CoreApiServiceStub> {
    private CoreApiServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CoreApiServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CoreApiServiceStub(channel, callOptions);
    }

    /**
     */
    public void listAccounts(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListAccountsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listAssets(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListAssetsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listNetworkParameters(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListNetworkParametersMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listParties(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListPartiesMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listValidators(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListValidatorsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listMarkets(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListMarketsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listProposals(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest request,
        io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getListProposalsMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class CoreApiServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<CoreApiServiceBlockingStub> {
    private CoreApiServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CoreApiServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CoreApiServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse listAccounts(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListAccountsMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse listAssets(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListAssetsMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse listNetworkParameters(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListNetworkParametersMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse listParties(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListPartiesMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse listValidators(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListValidatorsMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse listMarkets(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListMarketsMethod(), getCallOptions(), request);
    }

    /**
     */
    public io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse listProposals(io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getListProposalsMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class CoreApiServiceFutureStub extends io.grpc.stub.AbstractFutureStub<CoreApiServiceFutureStub> {
    private CoreApiServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected CoreApiServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new CoreApiServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse> listAccounts(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListAccountsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse> listAssets(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListAssetsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse> listNetworkParameters(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListNetworkParametersMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse> listParties(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListPartiesMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse> listValidators(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListValidatorsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse> listMarkets(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListMarketsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse> listProposals(
        io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getListProposalsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_LIST_ACCOUNTS = 0;
  private static final int METHODID_LIST_ASSETS = 1;
  private static final int METHODID_LIST_NETWORK_PARAMETERS = 2;
  private static final int METHODID_LIST_PARTIES = 3;
  private static final int METHODID_LIST_VALIDATORS = 4;
  private static final int METHODID_LIST_MARKETS = 5;
  private static final int METHODID_LIST_PROPOSALS = 6;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final CoreApiServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(CoreApiServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_LIST_ACCOUNTS:
          serviceImpl.listAccounts((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAccountsResponse>) responseObserver);
          break;
        case METHODID_LIST_ASSETS:
          serviceImpl.listAssets((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListAssetsResponse>) responseObserver);
          break;
        case METHODID_LIST_NETWORK_PARAMETERS:
          serviceImpl.listNetworkParameters((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListNetworkParametersResponse>) responseObserver);
          break;
        case METHODID_LIST_PARTIES:
          serviceImpl.listParties((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListPartiesResponse>) responseObserver);
          break;
        case METHODID_LIST_VALIDATORS:
          serviceImpl.listValidators((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListValidatorsResponse>) responseObserver);
          break;
        case METHODID_LIST_MARKETS:
          serviceImpl.listMarkets((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListMarketsResponse>) responseObserver);
          break;
        case METHODID_LIST_PROPOSALS:
          serviceImpl.listProposals((io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsRequest) request,
              (io.grpc.stub.StreamObserver<io.vegaprotocol.vega.coreapi.v1.Coreapi.ListProposalsResponse>) responseObserver);
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

  private static abstract class CoreApiServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    CoreApiServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return io.vegaprotocol.vega.coreapi.v1.Coreapi.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("CoreApiService");
    }
  }

  private static final class CoreApiServiceFileDescriptorSupplier
      extends CoreApiServiceBaseDescriptorSupplier {
    CoreApiServiceFileDescriptorSupplier() {}
  }

  private static final class CoreApiServiceMethodDescriptorSupplier
      extends CoreApiServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    CoreApiServiceMethodDescriptorSupplier(String methodName) {
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
      synchronized (CoreApiServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new CoreApiServiceFileDescriptorSupplier())
              .addMethod(getListAccountsMethod())
              .addMethod(getListAssetsMethod())
              .addMethod(getListNetworkParametersMethod())
              .addMethod(getListPartiesMethod())
              .addMethod(getListValidatorsMethod())
              .addMethod(getListMarketsMethod())
              .addMethod(getListProposalsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
