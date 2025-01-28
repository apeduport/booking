/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.BookingAccommodationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingAccommodation.createMany(input as any))),

        create: procedure.input($Schema.BookingAccommodationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingAccommodation.create(input as any))),

        deleteMany: procedure.input($Schema.BookingAccommodationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingAccommodation.deleteMany(input as any))),

        delete: procedure.input($Schema.BookingAccommodationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingAccommodation.delete(input as any))),

        findFirst: procedure.input($Schema.BookingAccommodationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).bookingAccommodation.findFirst(input as any))),

        findMany: procedure.input($Schema.BookingAccommodationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).bookingAccommodation.findMany(input as any))),

        findUnique: procedure.input($Schema.BookingAccommodationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).bookingAccommodation.findUnique(input as any))),

        updateMany: procedure.input($Schema.BookingAccommodationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingAccommodation.updateMany(input as any))),

        update: procedure.input($Schema.BookingAccommodationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).bookingAccommodation.update(input as any))),

        count: procedure.input($Schema.BookingAccommodationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).bookingAccommodation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.BookingAccommodationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingAccommodationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingAccommodationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingAccommodationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.BookingAccommodationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingAccommodationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingAccommodationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingAccommodationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingAccommodationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingAccommodationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingAccommodationGetPayload<T>, Context>) => Promise<Prisma.BookingAccommodationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.BookingAccommodationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingAccommodationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingAccommodationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingAccommodationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.BookingAccommodationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingAccommodationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingAccommodationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingAccommodationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingAccommodationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingAccommodationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingAccommodationGetPayload<T>, Context>) => Promise<Prisma.BookingAccommodationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.BookingAccommodationFindFirstArgs, TData = Prisma.BookingAccommodationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.BookingAccommodationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookingAccommodationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingAccommodationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BookingAccommodationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookingAccommodationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookingAccommodationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.BookingAccommodationFindManyArgs, TData = Array<Prisma.BookingAccommodationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.BookingAccommodationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.BookingAccommodationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingAccommodationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.BookingAccommodationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.BookingAccommodationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.BookingAccommodationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.BookingAccommodationFindUniqueArgs, TData = Prisma.BookingAccommodationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.BookingAccommodationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.BookingAccommodationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.BookingAccommodationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.BookingAccommodationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.BookingAccommodationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.BookingAccommodationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.BookingAccommodationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingAccommodationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingAccommodationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingAccommodationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.BookingAccommodationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.BookingAccommodationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BookingAccommodationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BookingAccommodationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.BookingAccommodationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.BookingAccommodationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BookingAccommodationGetPayload<T>, Context>) => Promise<Prisma.BookingAccommodationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.BookingAccommodationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BookingAccommodationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.BookingAccommodationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.BookingAccommodationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.BookingAccommodationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.BookingAccommodationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.BookingAccommodationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.BookingAccommodationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
