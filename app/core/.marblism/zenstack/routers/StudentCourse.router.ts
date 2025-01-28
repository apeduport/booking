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

        createMany: procedure.input($Schema.StudentCourseInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentCourse.createMany(input as any))),

        create: procedure.input($Schema.StudentCourseInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentCourse.create(input as any))),

        deleteMany: procedure.input($Schema.StudentCourseInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentCourse.deleteMany(input as any))),

        delete: procedure.input($Schema.StudentCourseInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentCourse.delete(input as any))),

        findFirst: procedure.input($Schema.StudentCourseInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).studentCourse.findFirst(input as any))),

        findMany: procedure.input($Schema.StudentCourseInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).studentCourse.findMany(input as any))),

        findUnique: procedure.input($Schema.StudentCourseInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).studentCourse.findUnique(input as any))),

        updateMany: procedure.input($Schema.StudentCourseInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentCourse.updateMany(input as any))),

        update: procedure.input($Schema.StudentCourseInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).studentCourse.update(input as any))),

        count: procedure.input($Schema.StudentCourseInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).studentCourse.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.StudentCourseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCourseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCourseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCourseCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.StudentCourseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCourseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentCourseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentCourseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCourseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCourseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentCourseGetPayload<T>, Context>) => Promise<Prisma.StudentCourseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.StudentCourseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCourseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCourseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCourseDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StudentCourseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCourseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentCourseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentCourseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCourseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCourseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentCourseGetPayload<T>, Context>) => Promise<Prisma.StudentCourseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StudentCourseFindFirstArgs, TData = Prisma.StudentCourseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.StudentCourseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudentCourseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentCourseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.StudentCourseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudentCourseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudentCourseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StudentCourseFindManyArgs, TData = Array<Prisma.StudentCourseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.StudentCourseFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StudentCourseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentCourseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.StudentCourseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StudentCourseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StudentCourseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StudentCourseFindUniqueArgs, TData = Prisma.StudentCourseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StudentCourseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StudentCourseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StudentCourseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StudentCourseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StudentCourseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StudentCourseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.StudentCourseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCourseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCourseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCourseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.StudentCourseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StudentCourseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StudentCourseGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StudentCourseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StudentCourseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StudentCourseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StudentCourseGetPayload<T>, Context>) => Promise<Prisma.StudentCourseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.StudentCourseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.StudentCourseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.StudentCourseCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.StudentCourseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.StudentCourseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.StudentCourseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.StudentCourseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.StudentCourseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
