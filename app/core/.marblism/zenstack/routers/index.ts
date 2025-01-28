/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createCourseRouter from "./Course.router";
import createAccommodationRouter from "./Accommodation.router";
import createStudentRouter from "./Student.router";
import createParentRouter from "./Parent.router";
import createBookingRouter from "./Booking.router";
import createBookingAccommodationRouter from "./BookingAccommodation.router";
import createStudentCourseRouter from "./StudentCourse.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as CourseClientType } from "./Course.router";
import { ClientType as AccommodationClientType } from "./Accommodation.router";
import { ClientType as StudentClientType } from "./Student.router";
import { ClientType as ParentClientType } from "./Parent.router";
import { ClientType as BookingClientType } from "./Booking.router";
import { ClientType as BookingAccommodationClientType } from "./BookingAccommodation.router";
import { ClientType as StudentCourseClientType } from "./StudentCourse.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        course: createCourseRouter(router, procedure),
        accommodation: createAccommodationRouter(router, procedure),
        student: createStudentRouter(router, procedure),
        parent: createParentRouter(router, procedure),
        booking: createBookingRouter(router, procedure),
        bookingAccommodation: createBookingAccommodationRouter(router, procedure),
        studentCourse: createStudentCourseRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    course: CourseClientType<AppRouter>;
    accommodation: AccommodationClientType<AppRouter>;
    student: StudentClientType<AppRouter>;
    parent: ParentClientType<AppRouter>;
    booking: BookingClientType<AppRouter>;
    bookingAccommodation: BookingAccommodationClientType<AppRouter>;
    studentCourse: StudentCourseClientType<AppRouter>;
}
