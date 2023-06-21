"""empty message

Revision ID: cf850ab66490
Revises: a52f3074d282
Create Date: 2023-06-20 20:35:48.026932

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf850ab66490'
down_revision = 'a52f3074d282'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('perfil', schema=None) as batch_op:
        batch_op.drop_column('url_profile_pic')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('perfil', schema=None) as batch_op:
        batch_op.add_column(sa.Column('url_profile_pic', sa.VARCHAR(length=128), autoincrement=False, nullable=False))

    # ### end Alembic commands ###