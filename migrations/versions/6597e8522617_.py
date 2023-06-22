"""empty message

Revision ID: 6597e8522617
Revises: d970cb672211
Create Date: 2023-06-22 13:53:50.220811

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6597e8522617'
down_revision = 'd970cb672211'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('categories', schema=None) as batch_op:
        batch_op.drop_constraint('categories_perfil_categorias_id_fkey', type_='foreignkey')
        batch_op.drop_column('perfil_categorias_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('categories', schema=None) as batch_op:
        batch_op.add_column(sa.Column('perfil_categorias_id', sa.INTEGER(), autoincrement=False, nullable=False))
        batch_op.create_foreign_key('categories_perfil_categorias_id_fkey', 'perfil', ['perfil_categorias_id'], ['id'])

    # ### end Alembic commands ###