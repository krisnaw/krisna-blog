create function title_content(posts) returns text as $$
select $1.title || ' ' || $1.content;
$$ language sql immutable;