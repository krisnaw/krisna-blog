create table posts
(
    id           bigint primary key generated always as identity,
    slug         text not null,
    title        text not null,
    content      text not null,
    published_at timestamp with time zone default null,
    created_at   timestamp with time zone default timezone('utc'::text, now()) not null
);